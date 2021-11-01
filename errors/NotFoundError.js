const CustomAPIError = require('./CustomAPIError');

const NotFoundError = (code, msg) => {
  return {
    code,
    ...CustomAPIError(msg),
  };
};

module.exports = NotFoundError;
