const getAllUsers = require('./get-all-users');
const getSingleUser = require('./get-single-user');
const showCurrentUser = require('./show-current-user');
const updateUser = require('./update-user');
const updateUserPassword = require('./update-user-password');
const changeEmail = require('./change-email');

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  changeEmail,
};
