require('dotenv/config');
const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserService.getUser(email, password);

    const jwtConfig = {
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user.id, email } }, secret, jwtConfig);

    return token;
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};