const { UserService } = require('../services');
const login = require('./login');

const loginController = async (req, res) => {
  const token = await login(req, res);

  res.status(200).json({ token });
};

const createUser = async (req, res) => {
  try {
    await UserService.createUser(req.body);
    const token = await login(req, res);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginController,
  createUser,
};