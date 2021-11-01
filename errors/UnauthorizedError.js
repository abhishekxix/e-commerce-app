const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./CustomAPIError');

const UnauthorizedError = (msg) => {
  return {
    code: StatusCodes.UNAUTHORIZED,
    ...CustomAPIError(msg),
  };
};

module.exports = UnauthorizedError;
