const loginMiddlewares = require('./login.middleware');
const createUserMiddlewares = require('./createUser.middleware');
const categoriesMiddlewares = require('./categories.middleware');

module.exports = {
  loginMiddlewares,
  createUserMiddlewares,
  categoriesMiddlewares,
};