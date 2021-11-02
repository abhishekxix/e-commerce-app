const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');

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

  res.status(StatusCodes.CREATED).json({ user });
};

module.exports = registerUser;
