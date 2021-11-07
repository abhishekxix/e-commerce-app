const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');

const getAllUsers = async (req, res) => {
  const users = await User.find({}, { password: 0, address: 0 });
  res.status(StatusCodes.OK).json({ users, count: users.length });
};

module.exports = getAllUsers;
