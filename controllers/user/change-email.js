const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../../errors');
const User = require('../../models/User');
const { sendVerificationMail } = require('../../utils');

const changeEmail = async (req, res) => {
  const { email } = req.body;
  const { userId } = req.user;

  if (!email) {
    throw BadRequestError('Please provide an email address.');
  }

  const user = await User.findById(userId);
  user.email = email;
  user.isVerified = false;
  await user.save();

  await sendVerificationMail(email, user);

  res
    .status(StatusCodes.ACCEPTED)
    .json({ msg: 'Please verify your email address.' });
};

module.exports = changeEmail;
