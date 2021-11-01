const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./CustomAPIError');

const ForbiddenError = (msg) => {
  return {
    code: StatusCodes.FORBIDDEN,
    ...CustomAPIError(msg),
  };
};

module.exports = ForbiddenError;
