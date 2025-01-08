const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Uncommon error:  Incorrect use of middleware leading to unexpected behavior.
// Example: placing middleware that modifies the response *after* sending the response.