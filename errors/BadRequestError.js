const CustomAPIError = require('./CustomAPIError');

const BadRequestError = (code, msg) => {
  return {
    code,
    ...CustomAPIError(msg),
  };
};

module.exports = BadRequestError;
