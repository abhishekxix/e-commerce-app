const CustomAPIError = require('./CustomAPIError');

const UnauthorizedError = (code, msg) => {
  return {
    code,
    ...CustomAPIError(msg),
  };
};

module.exports = UnauthorizedError;
