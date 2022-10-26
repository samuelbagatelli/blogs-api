const { User } = require('../models');

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  return user;
};

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
  getAllUsers,
  getUserById,
  getUser,
  getEmail,
  createUser,
};