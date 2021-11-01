// import packages
require('dotenv').config();
require('express-async-errors');
const express = require('express');

// create app express instance
const app = express();

// import db connection function
const connectDB = require('./db/connect');
// import middleware

// import routes

// use middleware
const port = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
  });
};

start();

const { BadRequestError } = require('./errors');

throw BadRequestError('I am throwing this error because I want to.');
