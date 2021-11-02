const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');
const sendVerificationMail = require('../../utils/send-verification-mail');

const registerUser = async (req, res) => {
  const { name, email, password, address, phoneNumber } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    address,
    phoneNumber,
    role: 'customer',
  });

  await sendVerificationMail(email, user);

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'please verify your email address.' });
};

module.exports = registerUser;
