const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const start = async () => {
  app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
  });
};

start();
