const {
  registerUser,
  logInUser,
  logOutUser,
  verifyAccountEmail,
} = require('../controllers/auth');

const authRouter = require('express').Router();

authRouter.route('/register').post(registerUser);
authRouter.route('/login').post(logInUser);
authRouter.route('/logout').get(logOutUser);
authRouter.route('/verify-email/:token').get(verifyAccountEmail);

module.exports = authRouter;
