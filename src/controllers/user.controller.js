const { UserService } = require('../services');
const login = require('./login');

const loginController = async (req, res) => {
  const token = await login(req, res);

  res.status(200).json({ token });
};

const createUser = async (req, res) => {
  await UserService.createUser(req.body);
  const token = await login(req, res);
  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await UserService.getAllUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const user = await UserService.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  loginController,
  createUser,
  getAllUsers,
  getUserById,
};