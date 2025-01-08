const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  // Middleware to modify the response (e.g., adding headers)
  res.setHeader('X-Custom-Header', 'value');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});