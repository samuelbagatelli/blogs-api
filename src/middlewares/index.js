const loginMiddlewares = require('./login.middleware');
const createUserMiddlewares = require('./createUser.middleware');
const categoriesMiddlewares = require('./categories.middleware');
const postsMiddlewares = require('./posts.middleware');

module.exports = {
  loginMiddlewares,
  createUserMiddlewares,
  categoriesMiddlewares,
  postsMiddlewares,
};