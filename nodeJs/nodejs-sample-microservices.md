Creating a complete set of Node.js microservices from scratch in a single response is quite extensive, but I can provide you with a simplified example of three Node.js microservices and demonstrate how to handle them. These microservices will communicate via HTTP, but you can adapt the communication method (e.g., message queuing) based on your requirements.

Let's build three microservices:

1. **User Service**: Manages user data, including registration and profile management.

2. **Product Service**: Manages the product catalog, including product creation and retrieval.

3. **Order Service**: Handles order management, including order creation and order status.

Here's the code for each of the microservices:

**User Service (`user-service.js`):**

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Mock user database
const users = [];

app.post('/register', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log('User Service is running on port ' + port);
});
```

**Product Service (`product-service.js`):**

```javascript
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Mock product database
const products = [];

app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log('Product Service is running on port ' + port);
});
```

**Order Service (`order-service.js`):**

```javascript
const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

// Mock order database
const orders = [];

app.post('/orders', (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(port, () => {
  console.log('Order Service is running on port ' + port);
});
```

Now, you can run these microservices separately in different terminal windows using Node.js. Ensure that you have the Express.js package installed:

```bash
npm install express
```

Start each microservice with the following commands:

```bash
node user-service.js
node product-service.js
node order-service.js
```

To handle communication between these microservices, you can use HTTP requests. For example, you can create a new order by sending an HTTP POST request from the "Order Service" to the "User Service" and "Product Service" to register a user and add products to the order.

Here's an example of creating an order in the "Order Service" by making requests to the other services:

```javascript
const axios = require('axios');

// Mock data for order
const orderData = {
  userId: 1,
  products: [1, 2, 3],
};

// Create a user in the User Service
axios.post('http://localhost:3000/register', { name: 'John Doe' })
  .then((userResponse) => {
    const user = userResponse.data;

    // Create products in the Product Service
    return axios.all([
      axios.post('http://localhost:3001/products', { name: 'Product A' }),
      axios.post('http://localhost:3001/products', { name: 'Product B' }),
      axios.post('http://localhost:3001/products', { name: 'Product C' }),
    ]).then((productResponses) => {
      const productIds = productResponses.map((response) => response.data.id);

      // Create an order in the Order Service
      orderData.userId = user.id;
      orderData.products = productIds;
      return axios.post('http://localhost:3002/orders', orderData)
        .then((orderResponse) => {
          const order = orderResponse.data;
          console.log('Order created:', order);
        });
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

In this example, the "Order Service" sends HTTP requests to the "User Service" and "Product Service" to create a user and products, and then creates an order using the returned data.

This is a simplified demonstration of how to handle Node.js microservices for an e-commerce system. In a real-world scenario, you would likely use more sophisticated techniques for communication, error handling, and service discovery. Additionally, consider implementing authentication and security measures for a production-ready system.


In a microservices architecture like the example provided, implementing authentication and authorization is crucial for securing your services. You can use various strategies and technologies to achieve this. Below, I'll outline a common approach for handling authentication and authorization using JSON Web Tokens (JWT) and express.js in Node.js.

**1. Install the Required Packages:**

First, install the necessary packages for authentication and JWT in your Node.js microservices:

```bash
npm install express jsonwebtoken passport passport-jwt
```

**2. Set Up Authentication Middleware:**

In each of your microservices (User Service, Product Service, Order Service), you should implement authentication middleware to verify the identity of incoming requests. Create a file, e.g., `authMiddleware.js`, and configure the middleware as follows:

```javascript
// authMiddleware.js
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your-secret-key', // Replace with a strong secret key
};

passport.use(new JwtStrategy(jwtOptions, (jwt_payload, done) => {
  // Check the payload for user authentication
  // You may query a database or another service for user information
  // Example: Check if user exists and is valid

  // Replace this example with your user authentication logic
  const user = findUserById(jwt_payload.userId);
  
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
}));

module.exports = passport.authenticate('jwt', { session: false });
```

**3. Generate JWT Tokens for Authentication:**

When a user registers or logs in, you can generate JWT tokens to be included in future requests for authentication. Create a token generator function, e.g., `generateToken`, in your User Service:

```javascript
const jwt = require('jsonwebtoken');

// Generate and return a JWT token
function generateToken(userId) {
  const payload = {
    userId,
  };
  return jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });
}

module.exports = generateToken;
```

**4. Implement Authentication Routes:**

In your User Service, you should implement routes for user registration and login. You can use the `generateToken` function to generate tokens upon successful registration or login:

```javascript
const express = require('express');
const router = express.Router();
const generateToken = require('./generateToken'); // Import your token generator

router.post('/register', (req, res) => {
  // Implement user registration logic and generate a token
  // Example: Create user, generate token, and send it in response
  // Replace this example with your registration logic
  const user = createUser(req.body);
  const token = generateToken(user.id);
  res.json({ token });
});

router.post('/login', (req, res) => {
  // Implement user login logic and generate a token
  // Example: Validate user credentials, generate token, and send it in response
  // Replace this example with your login logic
  if (validateCredentials(req.body)) {
    const user = findUserByEmail(req.body.email);
    const token = generateToken(user.id);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

module.exports = router;
```

**5. Implement Authorization:**

To handle authorization, you can check the user's role or permissions before allowing access to certain routes in your services. You can add a middleware function to your routes for authorization. Here's an example of how to protect a route in your Product Service:

```javascript
const express = require('express');
const router = express.Router();
const authMiddleware = require('./authMiddleware'); // Import your authentication middleware

router.get('/products', authMiddleware, (req, res) => {
  // This route is protected and only accessible to authenticated users
  // You can implement your authorization logic here
  // Example: Check user's role or permissions before allowing access
  // Replace this example with your authorization logic
  res.json({ message: 'You are authorized to access this route.' });
});

module.exports = router;
```

In this example, the `authMiddleware` will check if the incoming request includes a valid JWT token, and if it does, the user will be authorized to access the protected route.

Remember to replace the placeholder logic in the examples with your actual user authentication and authorization code. Additionally, consider using a real database to store user information and validate credentials.

This is a simplified overview of how to handle authentication and authorization in a Node.js microservices architecture. In a production environment, you should also consider using secure practices such as storing your secret key and user passwords securely, enabling HTTPS for secure communication, and handling token expiration and refresh mechanisms.
