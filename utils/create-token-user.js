const createTokenUser = ({ name, email, role }) => {
  return {
    name,
    email,
    role,
  };
};

module.exports = createTokenUser;
