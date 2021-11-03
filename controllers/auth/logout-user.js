const { StatusCodes } = require('http-status-codes');

const logOutUser = async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(Date.now()),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
  res.status(StatusCodes.OK).json({ msg: 'logged out' });
};

module.exports = logOutUser;
