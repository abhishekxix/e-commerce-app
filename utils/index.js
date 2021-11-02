const sendVerificationMail = require('./send-verification-mail');
const createTokenUser = require('./create-token-user');
const createJWT = require('./create-jwt');
const attachTokenCookie = require('./attach-token-cookie');

module.exports = {
  sendVerificationMail,
  createTokenUser,
  createJWT,
  attachTokenCookie,
};
