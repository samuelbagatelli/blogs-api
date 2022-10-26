require('dotenv/config');
const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserService.getUser(email, password);

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

    console.log(token);

    return token;
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};