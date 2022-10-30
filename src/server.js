require('dotenv').config();
const app = require('./app');

const { UserController, CategoryController, PostController } = require('./controllers');

const { 
  loginMiddlewares, 
  createUserMiddlewares,
  categoriesMiddlewares: { validateNameField },
  postsMiddlewares,
} = require('./middlewares');

const validateJWT = require('./auth/validateJWT');

const accessMiddlewares = Object.values(loginMiddlewares);
const creationMiddlewares = Object.values(createUserMiddlewares);
const blogPostsMiddlewares = Object.values(postsMiddlewares);

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.get('/user/:id', validateJWT, UserController.getUserById);

app.get('/user', validateJWT, UserController.getAllUsers);

app.post(
  '/categories', 
  validateJWT, 
  validateNameField, 
  CategoryController.createCategory,
);

app.get('/categories', validateJWT, CategoryController.getAllCategories);

app.post('/post', validateJWT, ...blogPostsMiddlewares, PostController.createPost);

app.get('/post', validateJWT, PostController.getAllPosts);

app.get('/post/:id', validateJWT, PostController.getPostsById);

app.post('/login', ...accessMiddlewares, UserController.loginController);

app.post('/user', ...creationMiddlewares, UserController.createUser);

app.listen(port, () => console.log('ouvindo porta', port));
