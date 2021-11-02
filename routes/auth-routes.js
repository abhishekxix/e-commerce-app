const {
  registerUser,
  logInUser,
  logOutUser,
} = require('../controllers/auth-controllers');

const authRouter = require('express').Router();

authRouter.route('/register').post(registerUser);
authRouter.route('/login').post(logInUser);
authRouter.route('/logout').get(logOutUser);

module.exports = authRouter;
