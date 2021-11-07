const errorHandlerMiddleware = require('./errorHandler');
const { authenticateUser } = require('./authentication');

module.exports = {
  errorHandlerMiddleware,
  authenticateUser,
};
