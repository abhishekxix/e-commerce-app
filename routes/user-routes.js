const {
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  showCurrentUser,
  changeEmail,
} = require('../controllers/user');

const { authenticateUser, authorizePermissions } = require('../middleware');
const { Roles } = require('../utils');

const userRouter = require('express').Router();

userRouter.use(authenticateUser);
userRouter
  .route('/')
  .get(authorizePermissions(Roles.ADMIN, Roles.OWNER), getAllUsers);
userRouter.route('/update-user').patch(updateUser);
userRouter.route('/update-user-password').patch(updateUserPassword);
userRouter.route('/show-current-user').get(showCurrentUser);
userRouter.route('/change-email').patch(changeEmail);
userRouter.route('/:userId').get(getSingleUser);

module.exports = userRouter;
