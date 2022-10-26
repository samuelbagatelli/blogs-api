const { User } = require('../models');

const getUser = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  return user;
};

const getEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const createUser = async (body) => {
  const newUser = await User.create(body);

  return newUser;
};

module.exports = {
  getUser,
  getEmail,
  createUser,
};