const {
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  showCurrentUser,
} = require('../controllers/user');

const userRouter = require('express').Router();

userRouter.route('/').get(getAllUsers);
userRouter.route('/update-user').patch(updateUser);
userRouter.route('/update-user-password').patch(updateUserPassword);
userRouter.route('/show-current-user').get(showCurrentUser);
userRouter.route('/:userId').get(getSingleUser);

module.exports = userRouter;
