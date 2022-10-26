const { UserService } = require('../services');

const validateNameLength = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const validateEmailFormat = (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(emailRegex)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const validatePasswordLength = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

const validateEmailExists = async (req, res, next) => {
  const { email } = req.body;

  const user = await UserService.getEmail(email);

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = {
  validateNameLength,
  validateEmailFormat,
  validatePasswordLength,
  validateEmailExists,
};