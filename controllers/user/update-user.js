const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');
const User = require('../../models/User');
const { createTokenUser, attachTokenCookie } = require('../../utils');

const updateUser = async (req, res) => {
  const { name, address, phoneNumber } = req.body;
  const user = await User.findById(req.user.userId);
  user.name = name;
  user.address = address;
  user.phoneNumber = phoneNumber ?? user.phoneNumber;

  const tokenUser = createTokenUser(user);
  attachTokenCookie(res, tokenUser);
  await user.save();

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

module.exports = updateUser;
