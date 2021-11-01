const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./CustomAPIError');

const NotFoundError = (msg) => {
  return {
    code: StatusCodes.NOT_FOUND,
    ...CustomAPIError(msg),
  };
};

module.exports = NotFoundError;
