const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthorizedError } = require('../../errors');
const User = require('../../models/User');

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!(oldPassword && newPassword)) {
    throw BadRequestError(
      `Please provide values for both old and new passwords.`
    );
  }

  const { userId } = req.user;
  const user = await User.findById(userId);

  const isPasswordCorrect = await user.comparePassword(oldPassword);

  if (!isPasswordCorrect) {
    throw UnauthorizedError(`Incorrect old password.`);
  }

  user.password = newPassword;
  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Password changed successfully.' });
};

module.exports = updateUserPassword;
