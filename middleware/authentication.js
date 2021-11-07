const { verifyToken } = require('../utils');
const { UnauthorizedError } = require('../errors');

const authenticateUser = (req, res, next) => {
  const { token } = req.signedCookies;

  if (!token) {
    throw UnauthorizedError('You need to be logged in to perform this action.');
  }
  let tokenUser = undefined;
  try {
    tokenUser = verifyToken(token);
  } catch (err) {
    throw UnauthorizedError('Invalid token.');
  }
  delete tokenUser.iat;
  delete tokenUser.exp;
  req.user = tokenUser;
  next();
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw UnauthorizedError(
        `You don't have sufficient permissions to perform this operation.`
      );
    }
    next();
  };
};

module.exports = { authenticateUser, authorizePermissions };
