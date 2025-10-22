# 🧾 UCRUD-FULLJS

Microprojeto educativo fullstack com foco em simplicidade, clareza e independência tecnológica. Aqui você encontrará múltiplas implementações de frontend e backend para um CRUD de clientes, usando apenas JavaScript puro (Node.js + JS no front) ou React, e com suporte a múltiplos bancos de dados.

---

## 🧩 Estrutura do Repositório

```

UCRUD-FULLJS/
├── backend-MySQL/          # Backend com Node.js + Express + MySQL
├── backend-PostgreSQL/     # Backend com Node.js + Express + PostgreSQL
├── frontAxios/             # Frontend React usando Axios
├── frontFetch/             # Frontend React usando Fetch API
├── frontVanilla/           # Frontend HTML + CSS + JS puro (vanilla)
├── LICENSE
├── README.md
└── .gitignore

````

---

## 🧠 Tecnologias

### 🔙 Backends
- **Node.js** + **Express**
- Banco de dados:
  - **PostgreSQL** (via `pg`)
  - **MySQL** (via `mysql2`)
  - _(MongoDB em breve)_

### 🔜 Frontends
- **React + Axios**
- **React + Fetch**
- **HTML + CSS + JS puro (vanilla)**

---

## 🎯 Funcionalidades

Todas as versões (front e back) implementam as operações essenciais de CRUD:

| Método | Rota              | Descrição                         |
|--------|-------------------|-----------------------------------|
| GET    | `/clientes`       | Lista todos os clientes           |
| GET    | `/clientes/:id`   | Retorna cliente específico        |
| POST   | `/clientes`       | Cria um novo cliente              |
| PUT    | `/clientes/:id`   | Atualiza um cliente existente     |
| DELETE | `/clientes/:id`   | Deleta um cliente pelo ID         |

---

## ⚙️ Requisitos

- **Node.js 18+**
- **Banco de dados local** (PostgreSQL ou MySQL)
- **Ferramentas úteis**:
  - Postman (para testes de API)
  - Insomnia
  - DBeaver ou Workbench

---

## 🧪 Setup Backend (Exemplo PostgreSQL)

```bash
cd backend-PostgreSQL
npm install
npm start
````

Certifique-se de configurar corretamente os dados de conexão no `src/server.js`.

### 🔁 Criação da tabela

```sql
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  endereco VARCHAR(200),
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(20)
);
```

### ⚠️ Para MySQL, o script muda para:

```sql
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  endereco VARCHAR(200),
  email VARCHAR(100),
  telefone VARCHAR(20)
);
```

---

## 🧪 Setup Frontends

### React + Axios

```bash
cd frontAxios
npm install
npm run dev
```

### React + Fetch

```bash
cd frontFetch
npm install
npm run dev
```

### Vanilla (HTML + CSS + JS)

* Acesse `frontVanilla/index.html` diretamente no navegador (não precisa build).
* Certifique-se de que o backend está rodando em `http://localhost:3000`.

---

## 🧰 Exemplos de payload (POST/PUT)

```json
{
  "nome": "João Silva",
  "endereco": "Rua Exemplo, 123",
  "email": "joao@email.com",
  "telefone": "11999999999"
}
```

---

## 📄 Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).

---

## 💡 Objetivos educacionais

* Demonstrar um CRUD completo com múltiplas abordagens de frontend
* Integrar backends simples com diferentes bancos de dados
* Servir como referência para aulas, bootcamps ou estudos autodidatas

---

Feito com 💙 por [rafaellindemann](https://github.com/rafaellindemann)



---

# Bônus
## Mini tutorial para testar o backend com Postman

Vambora testar pelo Postman as rotas implementadas no projeto.

---

# 🧪 Testando a API com Postman

Este mini tutorial ensina como testar manualmente a API REST do seu backend (MySQL ou PostgreSQL) utilizando o Postman.

> 💡 A API deve estar rodando em `http://localhost:3000`.

---

## 📥 1. **GET /clientes** — Listar todos os clientes

* **Método**: `GET`
* **URL**: `http://localhost:3000/clientes`
* **Objetivo**: Retorna todos os clientes cadastrados.

### No Postman:

1. Selecione o método `GET`
2. Cole a URL acima
3. Clique em **Send**
4. Você verá uma lista de objetos `cliente` no painel de resposta.

---

## 🔍 2. **GET /clientes/\:id** — Buscar cliente específico

* **Método**: `GET`
* **URL**: `http://localhost:3000/clientes/1` (substitua `1` pelo ID desejado)
* **Objetivo**: Retorna os dados de um cliente específico.

### No Postman:

1. Selecione o método `GET`
2. Insira a URL com um ID real
3. Clique em **Send**

---

## ➕ 3. **POST /clientes** — Criar novo cliente

* **Método**: `POST`
* **URL**: `http://localhost:3000/clientes`
* **Objetivo**: Adiciona um novo cliente ao banco.

### Payload (JSON):

```json
{
  "nome": "João Silva",
  "endereco": "Rua Exemplo, 123",
  "email": "joao@email.com",
  "telefone": "11999999999"
}
```

### No Postman:

1. Método `POST`
2. Aba `Body` → Selecione `raw` + `JSON`
3. Cole o JSON acima
4. Clique em **Send**
5. O cliente será criado, e os dados retornados na resposta.

---

## ✏️ 4. **PUT /clientes/\:id** — Atualizar cliente existente

* **Método**: `PUT`
* **URL**: `http://localhost:3000/clientes/1` (troque o ID)
* **Objetivo**: Atualiza os dados de um cliente.

### Payload (JSON):

```json
{
  "nome": "João Atualizado",
  "endereco": "Rua Nova, 456",
  "email": "joao.novo@email.com",
  "telefone": "21999999999"
}
```

### No Postman:

1. Método `PUT`
2. Aba `Body` → `raw` + `JSON`
3. Insira os dados atualizados
4. Clique em **Send**

---

## ❌ 5. **DELETE /clientes/\:id** — Remover cliente

* **Método**: `DELETE`
* **URL**: `http://localhost:3000/clientes/1` (substitua com o ID real)
* **Objetivo**: Remove o cliente do banco de dados.

### No Postman:

1. Método `DELETE`
2. Insira a URL com o ID do cliente a ser removido
3. Clique em **Send**

---

## 🧾 Dica Final

* Sempre use **Content-Type: application/json** no cabeçalho ao enviar corpo em POST/PUT.
* Certifique-se que o backend está rodando antes de testar.
* Use `GET /clientes` após POST/PUT/DELETE para conferir se deu tudo certo.

---

# Bônus 1: Sobre o try/catch 
O bloco `try/catch` tem a função de **tratar erros** que possam acontecer durante a execução da rota `/clientes` no backend.
Vamos detalhar:

---

### **Como ele funciona passo a passo**

```javascript
app.get('/clientes', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM clientes');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});
```

#### 1. **`try` — tentativa de execução**

* Tudo que está dentro do bloco `try` será executado **normalmente**.
* Aqui, ele faz uma consulta no banco de dados:

  ```javascript
  const [rows] = await pool.query('SELECT * FROM clientes');
  ```
* Se der tudo certo, ele retorna os dados dos clientes em JSON:

  ```javascript
  res.json(rows);
  ```

#### 2. **Se ocorrer um erro**

* Se a conexão com o banco falhar, a tabela não existir ou ocorrer qualquer exceção durante a execução do `await pool.query(...)`, o fluxo **salta diretamente para o bloco `catch`**.

#### 3. **`catch` — tratamento do erro**

* O erro capturado fica disponível na variável `err`.
* O código imprime a mensagem de erro no terminal do servidor:

  ```javascript
  console.error(err.message);
  ```
* E responde para o cliente (navegador ou frontend) com um **status HTTP 500** (erro interno no servidor) e uma mensagem amigável:

  ```javascript
  res.status(500).json({ error: 'Erro ao buscar clientes' });
  ```

---

### **Por que usar try/catch em rotas async**

* Chamadas assíncronas (com `await`) podem **lançar exceções** se algo der errado.
* Sem `try/catch`, o servidor **quebraria a execução da rota** e poderia até cair completamente, dependendo do caso.
* Com `try/catch`, você **controla a resposta ao usuário** e mantém o servidor rodando com segurança.

---

**Resumindo:**

* `try` → executa o código que pode falhar.
* `catch` → intercepta o erro caso ocorra e permite tratá-lo de forma segura.
* Isso evita que a aplicação quebre e melhora a experiência do usuário, que recebe uma resposta clara mesmo em caso de falhas.

## Bônus 1.1: Mas isso antecipa a falha ou trata ela depois de acontecer?

**O `try/catch` não antecipa a falha** — ele **deixa o erro acontecer** e então **intercepta e trata** esse erro depois que ele ocorre.

Vamos ilustrar:

---

### Exemplo mental

Imagine que dentro do `try` você tem:

```javascript
const [rows] = await pool.query('SELECT * FROM clientes');
```

Se o banco estiver fora do ar ou a tabela `clientes` não existir, a função `pool.query(...)` **vai lançar uma exceção**.

* **Sem try/catch** → o erro “estoura” e pode derrubar a rota (ou até todo o servidor, se não for tratado em nenhum lugar).
* **Com try/catch** → o erro acontece igual, mas é **“capturado”** pelo `catch`, permitindo que você trate a situação de forma controlada (ex: enviar uma mensagem amigável ao usuário).

---

### Ou seja:

* `try/catch` **não evita que o erro ocorra**.
* Ele **evita que o erro não tratado quebre a aplicação**.
* E permite que você defina **como reagir** quando o erro acontecer.

---

**Analogia:**
Pense no `try` como dirigir um carro e no `catch` como o **airbag**:

* O airbag não impede o acidente.
* Mas quando ele acontece, o airbag amortece e protege — evitando consequências piores.

---

**Resumo final:**

> O `try/catch` não previne erros — ele trata erros **depois** que eles acontecem, de forma controlada e segura.

//