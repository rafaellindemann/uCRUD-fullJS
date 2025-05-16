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

