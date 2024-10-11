
# API RESTful com Autenticação

Opa, e aí! Esse projeto é uma API RESTful com autenticação de usuários, usando Node.js, Express e MongoDB. Dá pra criar usuários, fazer login e gerar tokens JWT pra proteger as rotas privadas."

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB (Atlas)**
- **Mongoose**
- **JWT (JSON Web Token)**
- **dotenv**

## Instalação

1. Clone o repositório:

    ```
    git clone https://github.com/seu-usuario/api-crud-auth.git
    ```

2. Navegue até o diretório do projeto:

    ```
    cd api-crud-auth
    ```

3. Instale as dependências:

    ```
    npm install
    ```

4. Crie um arquivo `.env` baseado no exemplo abaixo:

    ```bash
    PORT=5000
    MONGO_URI=mongodb+srv://seu-usuario:sua-senha@cluster0.mongodb.net/user_management?retryWrites=true&w=majority
    JWT_SECRET=seuSegredoJWT
    ```

5. Inicie o servidor:

    ```
    npm start
    ```

6. Use o **Postman** ou outro cliente HTTP para interagir com a API.

## Endpoints

### Autenticação

- **POST** `/api/auth/register`: Registra um novo usuário.
  - **Body** (JSON):
    ```json
    {
      "name": "Seu Nome",
      "email": "seuemail@example.com",
      "password": "suaSenha"
    }
    ```

- **POST** `/api/auth/login`: Realiza login de um usuário registrado e retorna um token JWT.
  - **Body** (JSON):
    ```json
    {
      "email": "seuemail@example.com",
      "password": "suaSenha"
    }
    ```

### Rotas Privadas

Exemplo de uma rota privada que requer um token JWT para acesso:

- **GET** `/api/private`: Retorna informações privadas.
  - Adicione o token JWT no header:
    ```
    Authorization: Bearer <seu-token-jwt>
    ```

## Próximos Passos

- Implementar um frontend com **React** para consumir essa API.
- Melhorar o gerenciamento de erros.
- Adicionar mais funcionalidades, como recuperação de senha.

## Contribuição

Fique à vontade para enviar pull requests e relatar issues.


