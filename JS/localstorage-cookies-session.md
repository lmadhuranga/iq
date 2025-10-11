
----------

## 🧠 1. LocalStorage

**Definition:**  
`localStorage` is a web storage mechanism that allows you to store **key–value pairs** in a user's browser **without any expiration time**.  
The data persists even after the browser is closed or the computer restarts.

**Key points:**

-   Storage limit: ~5–10 MB (depends on browser)
    
-   Stored per domain (you can only access it from the same origin)
    
-   Data persists until manually deleted by code or the user (e.g., clearing browser data)
    

**Usage Example:**

```js
// Save data
localStorage.setItem("theme", "dark");

// Retrieve data
const theme = localStorage.getItem("theme");

// Remove data
localStorage.removeItem("theme");

// Clear all data
localStorage.clear();

```

**Use cases:**

-   Saving **user preferences** (theme, layout)
    
-   **Caching** data for performance
    
-   **Remembering login states** (non-sensitive info like username)
    

----------

## 🍪 2. Cookies

**Definition:**  
Cookies are small text files stored by the browser and sent to the **server with every HTTP request**.  
They’re often used for **authentication**, **session tracking**, and **user analytics**.

**Key points:**

-   Storage limit: ~4 KB per cookie
    
-   Accessible by both **client (JavaScript)** and **server (HTTP headers)**
    
-   Can have an **expiration date**
    
-   Automatically sent with every request to the same domain
    

**Usage Example (Client-Side):**

```js
// Set cookie (expires in 7 days)
document.cookie = "username=Rohit; max-age=" + 7 * 24 * 60 * 60;

// Read cookie
console.log(document.cookie); // "username=Rohit"

// Delete cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

```

**Use cases:**

-   **Authentication tokens** (e.g., JWT stored in `HttpOnly` cookies for secure login)
    
-   **Session tracking**
    
-   **Analytics and personalization**
    

**⚠️ Security Tip:**  
Use `HttpOnly` and `Secure` flags to prevent access from JavaScript and restrict to HTTPS:

```
Set-Cookie: token=abc123; HttpOnly; Secure; SameSite=Strict;

```

----------

## 🕒 3. SessionStorage

**Definition:**  
`sessionStorage` is similar to `localStorage` but the data lasts **only for the duration of the browser tab or window**.  
Once the tab is closed, data is cleared.

**Key points:**

-   Storage limit: ~5 MB
    
-   Accessible only within the same tab
    
-   Cleared when tab/window is closed
    

**Usage Example:**

```js
// Save data for this session
sessionStorage.setItem("step", "2");

// Retrieve data
console.log(sessionStorage.getItem("step"));

// Clear data
sessionStorage.clear();

```

**Use cases:**

-   Temporary form data
    
-   Storing **one-time state** (like checkout progress)
    
-   Avoid sharing data between tabs
    

---------- 
![enter image description here](https://raw.githubusercontent.com/lmadhuranga/iq/refs/heads/main/temp/localstorage-cookies-session.png)
 

----------

## 🧰 Example Real-world Use Case
![enter image description here](https://raw.githubusercontent.com/lmadhuranga/iq/refs/heads/main/temp/localstorage-cookies-session2.png)
 

----------

Would you like me to show a **diagram comparing how each works in browser + server flow (login example)**? It helps visualize how cookies vs localStorage behave in an authentication system.


Perfect 👍 — here’s a **complete README.md–style explanation** (formatted for GitHub or documentation use)  
covering **JWT storage in Cookies** using both **Node.js (Express)** and **Spring Boot (Java)** examples.

----------

# 🔐 JWT Authentication using Cookies (Secure HttpOnly Setup)

This guide explains how to implement secure JWT authentication using **cookies** instead of `localStorage` — ensuring protection against **XSS** and **token theft**.

----------

## 🧠 Why Store JWT in Cookies?

Unlike `localStorage`, cookies can be:

-   Marked **`HttpOnly`** → not accessible by JavaScript (prevents XSS)
    
-   Marked **`Secure`** → only sent over HTTPS
    
-   Marked **`SameSite=Strict`** → prevents CSRF
    

✅ Cookies automatically get sent with every request to the same domain — no need to manually attach tokens in headers.

----------

## ⚙️ 1. Node.js (Express) Implementation

### 📁 Folder Structure

```
jwt-cookie-auth/
 ├── server.js
 ├── package.json
 └── README.md

```

### 📦 Dependencies

```bash
npm install express cookie-parser jsonwebtoken

```

----------

### 🧩 server.js

```js
import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

const SECRET = "my_secret_key";

// ✅ LOGIN ENDPOINT
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "rohit" && password === "12345") {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 3600000, // 1 hour
    });

    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// ✅ VERIFY TOKEN MIDDLEWARE
function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// ✅ PROTECTED ROUTE
app.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

// ✅ LOGOUT
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

```

----------

### 🖥️ React Frontend Example

```js
// Login
fetch("http://localhost:3000/login", {
  method: "POST",
  credentials: "include", // important
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "rohit", password: "12345" }),
});

// Access protected route
fetch("http://localhost:3000/profile", {
  method: "GET",
  credentials: "include", // send cookies automatically
})
  .then(res => res.json())
  .then(console.log);

```

----------

## ☕ 2. Spring Boot (Java) Implementation

### 📁 Folder Structure

```
spring-jwt-cookie-auth/
 ├── src/main/java/com/example/jwtcookie/
 │     ├── JwtUtil.java
 │     ├── AuthController.java
 │     └── Application.java
 ├── pom.xml
 └── README.md

```

### 📦 Dependencies (pom.xml)

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
  </dependency>
  <dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
  </dependency>
  <dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
  </dependency>
</dependencies>

```

----------

### 🧩 JwtUtil.java

```java
package com.example.jwtcookie;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;

public class JwtUtil {
    private static final Key key = Keys.hmacShaKeyFor("my_secret_key_1234567890".getBytes());
    private static final long EXPIRATION_TIME = 3600000; // 1 hour

    public static String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public static String validateToken(String token) {
        try {
            return Jwts.parserBuilder().setSigningKey(key).build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
        } catch (JwtException e) {
            return null;
        }
    }
}

```

----------

### 🧩 AuthController.java

```java
package com.example.jwtcookie;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password,
                        HttpServletResponse response) {

        if ("rohit".equals(username) && "12345".equals(password)) {
            String token = JwtUtil.generateToken(username);

            Cookie cookie = new Cookie("token", token);
            cookie.setHttpOnly(true);
            cookie.setSecure(true);
            cookie.setPath("/");
            cookie.setMaxAge(3600); // 1 hour
            cookie.setDomain("localhost");
            response.addCookie(cookie);

            return "Login successful!";
        }
        return "Invalid credentials!";
    }

    @GetMapping("/profile")
    public String profile(HttpServletRequest request) {
        String token = null;

        for (Cookie cookie : request.getCookies()) {
            if ("token".equals(cookie.getName())) {
                token = cookie.getValue();
                break;
            }
        }

        if (token != null) {
            String username = JwtUtil.validateToken(token);
            if (username != null) {
                return "Welcome " + username;
            }
        }
        return "Unauthorized!";
    }

    @PostMapping("/logout")
    public String logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("token", null);
        cookie.setPath("/");
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        return "Logged out successfully!";
    }
}

```

----------

## 🧩 Cookie Flags Summary
![enter image description here](https://raw.githubusercontent.com/lmadhuranga/iq/refs/heads/main/temp/localstorage-cookies-session3.png)
 
Controls cookie lifespan

----------

## ✅ Best Practices

-   Always use **HTTPS** in production.
    
-   Use **short-lived JWTs** and refresh tokens if needed.
    
-   Store **only JWTs** (not passwords or user data) in cookies.
    
-   Set **CORS** with `credentials: true` on frontend and backend.
    

----------

Would you like me to include an additional section with **refresh token + access token (2-cookie strategy)** for production-grade setups? It’s commonly used in modern apps like Next.js + Spring Boot or Express APIs.