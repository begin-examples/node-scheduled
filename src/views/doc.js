module.exports = function Doc({ visits }) {
  visits = visits || ''
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
  <title>Architect</title>
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    html,
    body {
      height: 100%;
    }
    body {
      display: flex;
      justify-content: center;
      padding-top: 5rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      color: white;
      background-image: linear-gradient(-45deg, #25A78B, #7A43EE);
      background-repeat: no-repeat;
    }
    .font-size-xl {
      font-size: 10vw;
    }
  </style>
</head>
<body>
<h1 class="font-size-xl">
  ${ visits } views
</h1>
</body>
</html>
  `
}

