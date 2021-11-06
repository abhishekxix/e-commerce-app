const getAllUsers = require('./get-all-users');
const getSingleUser = require('./get-single-user');
const showCurrentUser = require('./show-current-user');
const updateUser = require('./update-user');
const updateUserPassword = require('./update-user-password');

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
