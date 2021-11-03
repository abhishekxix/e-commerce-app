const sendVerificationMail = require('./send-verification-mail');
const createTokenUser = require('./create-token-user');
const createJWT = require('./create-jwt');
const attachTokenCookie = require('./attach-token-cookie');
const sendPasswordResetMail = require('./send-reset-password-mail');

module.exports = {
  sendVerificationMail,
  createTokenUser,
  createJWT,
  attachTokenCookie,
  sendPasswordResetMail,
};
