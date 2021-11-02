const nodemailer = require('nodemailer');
const createJWT = require('./create-jwt');
const createTokenUser = require('./create-token-user');

const sendVerificationMail = async (target, user) => {
  const tokenUser = createTokenUser(user);
  const verificationToken = createJWT(tokenUser);

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'p2g23fc6y72qbt2z@ethereal.email',
      pass: 'c4pTKBWgfVRJn74ue4',
    },
  });

  let info = await transporter.sendMail({
    from: `"No reply" <verification@ecommercestore.com>`,
    to: target,
    subject: 'Verify email address',
    html: `Click the following link to verify your email address: <br/>
    <a href="http://localhost:${5000}/api/v1/auth/verify-email/${verificationToken}" target="_blank">Verify email</a> <br/>`,
  });
};
module.exports = sendVerificationMail;
