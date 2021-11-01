const CustomAPIError = require('./CustomAPIError');

const ForbiddenError = (code, msg) => {
  return {
    code,
    ...CustomAPIError(msg),
  };
};

module.exports = ForbiddenError;
