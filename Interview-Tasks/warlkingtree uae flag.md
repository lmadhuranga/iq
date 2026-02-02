```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    html,
    body {
      height: 100%;
      margin: 0;
    }

    .container {
      width: 100%;
      background: #714a06;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .flag {
      width: 300px;
      height: 200px;
      display: flex;
    }

    .red {
      background: #ff0000;
      width: 25%;
      display: flex;
    }

    .right {
      width: 75%;
      display: flex;
      flex-direction: column;
    }

    .green {
      flex: 1;
      background: green;
    }

    .white {
      flex: 1;
      background: white;
    }

    .black {
      flex: 1;
      background: black;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="flag">
      <div class="red"></div>

      <div class="right">
        <div class="green"></div>
        <div class="white"></div>
        <div class="black"></div>
      </div>
    </div>
  </div>
</body>

</html>
```
