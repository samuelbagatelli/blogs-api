# Este é o repositório do projeto Blogs API!
_repositório baseado em sistemas operacionais Linux_

Esse foi um projeto realizado durante o curso da Trybe, onde a proposta foi desenvolver uma API e um banco de dados para a produção de conteúdo para um blog.

A aplicação foi desenvolvida em `Node.js` utilizando o pacote `sequelize` para fazer um CRUD (Create, Read, Update e Delete) de posts.

Para realizar o projeto foram seguidos os princípios do REST para criar a API.

Como regra de negócio, para fazer um post é necessário usuário e login, portanto, há relação entre `user` e `post`.

__Caso queira acessar a aplicação em funcionamento:__ *link*

<br />

# Como rodar o projeto na sua máquina:

<details>
  <summary><strong>Não possuo NPM instalado:</strong></summary><br />

  Certifique-se de instalar (caso não possua) o Node Package Manager na sua máquina.

  Para verificar se você possui o NPM, basta digitar este comando no terminal:

      npm -v

      // O retorno de ser algo parecido com: 9.2.0
  

  __Caso não esteja instalado, basta seguir as instruções:__ <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>
</details>

<br />

<details>
  <summary><strong>Não possuo git CLI instalado:</strong></summary><br />

  Certifique-se de instalar (caso não possua) o git Command Line Interface no seu computador.

  Para verificar se você possui o git, basta digitar este comando no terminal:
  
      git --version

      // O retorno de ser algo parecido com: git version 2.25.1
  

  __Caso não esteja instalado, basta seguir as instruções:__ <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>
</details>

<br />

<details>
  <summary><strong>Rodando o projeto:</strong></summary><br />

  1. Clone o repositório

  - Use, no terminal, o comando: `git clone git@github.com:samuelbagatelli/blogs-api.git`
  - Entre na pasta do repositório que você acabou de clonar, com o comando: `cd blogs-api`

  2. Instale as dependências:

  - `npm install`

  3. Agora basta digitar e executar o comando:

  - `npm start`
</details><br />

# Fazendo alterações no projeto:

Caso tenha sugestões de melhoria para a aplicação, sinta-se a vontade para:
 
  - Abrir um _Pull Request_ com as mudanças que você fez;

  - Fazer um _fork_ do projeto para o seu perfil no GitHub;

  - Ou me mandar uma mensagem com as ideias que você teve:
    - __email:__ <contato.samuelbagatelli@gmail.com>

<br />

# Créditos:

<details>
  <summary><strong>Desenvolvido por mim:</strong></summary><br />

  Toda a organização de pastas, aplicando conceitos REST, parte lógica e visual da aplicação foram desenvolvidos por mim.
</details>

<br />

<details>
  <summary><strong>Desenvolvido pela Trybe:</strong></summary><br />

  Toda a parte de configuração de ambiente e _setup_ da aplicação foi desenvolvida pelo time da Trybe.
</details>