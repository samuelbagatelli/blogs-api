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

  const transform = JSON.stringify(users);

  const undo = JSON.parse(transform);

  const allUsers = undo.reduce((acc, curr) => {
    const { password, ...safeUsers } = curr;
    return [...acc, safeUsers];
  }, []);

  return res.status(200).json(allUsers);
};

module.exports = {
  loginController,
  createUser,
  getAllUsers,
};