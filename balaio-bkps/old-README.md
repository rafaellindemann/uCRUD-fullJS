# uCRUD-fullJS
Um micro CRUD de clientes baseado em React JS, NodeJS e PostgreSQL.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)





Status da implementação: 
- Backend para PostgreSQL full funcionando;
- Front React+Axios full funcionando, atomizado e simplificado. Talvez um refat visual não seja ruim;
- Backend para MySQL wip
- wip front com fetch, vai sair em breve...



# O Server, backend em NodeJS

MVP de um server simples implementando as 5 rotas básicas para praticar a comunicação do front com back. Backend feito em NodeJS para um BD PostgreSQL usando a lib 'pg'.

## Para instalar as dependências, entre na pasta 'back' e execute:
```
npm install
```

## Para rodar o server:
```
npm start 
```

O server sobe por padrão em `http://localhost:3000/`

## Dependências
```
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "pg": "^8.12.0"
  },
```

# reCriar o BD
```
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(200),
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20)
);
```
## Popular o BD
```
Rodar o front e cadastrar alguns registros rapidão.
```


# Doc e Teste da API
Aqui está um guia para testar cada rota da sua API no Postman. Vou descrever as consultas necessárias para `GET`, `POST`, `PUT`, e `DELETE`, juntamente com os parâmetros que você deve enviar para cada uma e a forma como eles devem ser enviados.

### 1. **GET: Buscar todos os clientes**
   - **Método**: `GET`
   - **URL**: `http://localhost:3000/clientes`
   - **Descrição**: Retorna a lista de todos os clientes cadastrados.
   - **Parâmetros**: Nenhum
   - **Forma de envio**: Não precisa enviar nenhum dado, apenas a URL.

   **No Postman:**
   - Selecione o método `GET`.
   - Cole a URL `http://localhost:3000/clientes`.
   - Clique em "Send".

### 1b. **GET: buscar um cliente por ID**
   - **Método**: `GET`
   - **URL**: `http://localhost:3000/clientes/:id` (substitua :id pelo ID do cliente que deseja buscar, por exemplo, 1)
   - **Descrição**: Retorna o cliente com o id passado.
   - **Parâmetros**: O id do cliente é passado diretamente na URL.
   - **Forma de envio**: O `id` é passado diretamente na URL.

   **No Postman:**
   - Selecione o método `GET`.
   - Cole a URL `http://localhost:3000/clientes/1`.
   - Clique em "Send".


### 2. **POST: Adicionar um novo cliente**
   - **Método**: `POST`
   - **URL**: `http://localhost:3000/clientes`
   - **Descrição**: Adiciona um novo cliente ao banco de dados.
   - **Parâmetros**:
     - `nome`: String (obrigatório)
     - `endereco`: String (opcional)
     - `email`: String (obrigatório)
     - `telefone`: String (opcional)
   - **Forma de envio**: JSON no corpo da requisição (`raw`, `JSON`).

   **No Postman:**
   - Selecione o método `POST`.
   - Cole a URL `http://localhost:3000/clientes`.
   - Vá até a aba `Body`.
   - Selecione a opção `raw` e depois `JSON` (na lista suspensa à direita).
   - No campo de texto, insira um JSON como o exemplo abaixo:
     ```json
     {
         "nome": "João Silva",
         "endereco": "Rua A, 123",
         "email": "joao.silva@example.com",
         "telefone": "123456789"
     }
     ```
   - Clique em "Send".

### 3. **PUT: Atualizar um cliente existente**
   - **Método**: `PUT`
   - **URL**: `http://localhost:3000/clientes/:id`
   - **Descrição**: Atualiza as informações de um cliente existente com base no `id`.
   - **Parâmetros**:
     - `id`: Integer (obrigatório na URL)
     - `nome`: String (obrigatório)
     - `endereco`: String (opcional)
     - `email`: String (obrigatório)
     - `telefone`: String (opcional)
   - **Forma de envio**: JSON no corpo da requisição (`raw`, `JSON`).

   **No Postman:**
   - Selecione o método `PUT`.
   - Cole a URL `http://localhost:3000/clientes/1` (substitua `1` pelo `id` do cliente que deseja atualizar).
   - Vá até a aba `Body`.
   - Selecione a opção `raw` e depois `JSON`.
   - No campo de texto, insira um JSON como o exemplo abaixo:
     ```json
     {
         "nome": "Maria Silva",
         "endereco": "Rua B, 456",
         "email": "maria.silva@example.com",
         "telefone": "987654321"
     }
     ```
   - Clique em "Send".

### 4. **DELETE: Deletar um cliente existente**
   - **Método**: `DELETE`
   - **URL**: `http://localhost:3000/clientes/:id`
   - **Descrição**: Deleta um cliente existente com base no `id`.
   - **Parâmetros**:
     - `id`: Integer (obrigatório na URL)
   - **Forma de envio**: O `id` é passado diretamente na URL.

   **No Postman:**
   - Selecione o método `DELETE`.
   - Cole a URL `http://localhost:3000/clientes/1` (substitua `1` pelo `id` do cliente que deseja deletar).
   - Clique em "Send".

### Resumo das rotas:

- **GET** (`/clientes`): Retorna todos os clientes.
- **POST** (`/clientes`): Adiciona um novo cliente, enviando um JSON no corpo.
- **PUT** (`/clientes/:id`): Atualiza um cliente existente, enviando um JSON no corpo e o `id` na URL.
- **DELETE** (`/clientes/:id`): Deleta um cliente, enviando o `id` na URL.

Certifique-se de que o servidor está rodando (`node server.js`) e que você tem clientes cadastrados para testar o `PUT` e `DELETE`. 



# Front React + axios

## Para instalar as dependências, entre na pasta 'frontAxios' e execute:
```
npm install
```

## Para rodar:
```
npm run dev
```



Exemplo do array de clientes recebido no Front:

```
{id: 1, nome: 'GENéZio', endereco: 'Rua B, 456', email: 'GenZ@email.com', telefone: '987654321'},
{id: 3, nome: 'Capitão Ganso', endereco: 'Rua AA, 123', email: 'ganso@example.com', telefone: '123456789'},
{id: 7, nome: 'Mano Juca', endereco: 'Casa Dele', email: 'mano@laemcasa.com', telefone: '22222222'},
{id: 2, nome: 'Helo', endereco: 'Rua da Helo', email: 'hell@o.com', telefone: '111'},
{id: 8, nome: 'Gael', endereco: 'Fazenda de Jaré, Mato do Sul', email: 'gael@jare.com', telefone: '5656565656'}
```


# Front com fetch api
wip
