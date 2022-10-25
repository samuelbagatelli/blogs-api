const { User } = require('../models');

const getUser = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  return user;
};

module.exports = {
  getUser,
};