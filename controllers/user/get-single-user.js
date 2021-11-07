const { NotFoundError } = require('../../errors');
const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');
const { Roles } = require('../../utils');

const getSingleUser = async (req, res) => {
  const { userId } = req.params;
  let user;
  if (req.user.role == Roles.CUSTOMER) {
    user = await User.findById(userId, {
      password: 0,
      address: 0,
      phoneNumber: 0,
      role: 0,
      email: 0,
    });
  } else if (req.user.role == Roles.ADMIN || req.user.role == Roles.OWNER) {
    user = await User.findById(userId, {
      password: 0,
    });
  }
  if (!user) {
    throw NotFoundError(`No user found with userId: ${userId}`);
  }

  res.status(StatusCodes.OK).json({ user });
};

module.exports = getSingleUser;
