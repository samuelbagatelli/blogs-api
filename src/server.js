require('dotenv').config();
const app = require('./app');

const { UserController } = require('./controllers');

const { loginMiddlewares, createUserMiddlewares } = require('./middlewares');

const accessMiddlewares = Object.values(loginMiddlewares);
const creationMiddlewares = Object.values(createUserMiddlewares);

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', ...accessMiddlewares, UserController.loginController);

app.post('/user', ...creationMiddlewares, UserController.createUser);

app.listen(port, () => console.log('ouvindo porta', port));
