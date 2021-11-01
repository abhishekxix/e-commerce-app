const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./CustomAPIError');

const BadRequestError = (msg) => {
  return {
    code: StatusCodes.BAD_REQUEST,
    ...CustomAPIError(msg),
  };
};

module.exports = BadRequestError;
