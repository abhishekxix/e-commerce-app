const jwt = require('jsonwebtoken');
const {
  UnauthorizedError,
  NotFoundError,
  BadRequestError,
} = require('../../errors');
const User = require('../../models/User');

const verifyAccountEmail = async (req, res) => {
  const { token } = req.params;
  let payload = undefined;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw UnauthorizedError('Invalid verification token');
  }

  const user = await User.findOne({ email: payload.email });

  if (user.isVerified) {
    throw BadRequestError('User is already verified.');
  }
  user.isVerified = true;
  await user.save();

  res.send('verified');
};

module.exports = verifyAccountEmail;
