
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is my first CI/CD pipeline for a microservices project');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
