

# Backend Node, Express e MySQL
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

## Pré-requisitos
- MySQL Workbench instalado;
- MySQL Instalado https://dev.mysql.com/downloads/installer/


## Instalar e rodar
Para rodar, abra um terminal na pasta 'backend-MySQL'
```
npm i
```
para instalar as dependências;

em seguida, para iniciar o server:
```
npm start
```

---
Status do desenvolvimento:
- backend acessando BD MySQL testado e funcional;




---
---

# Criar BD
Vamos criar seu banco de dados e a tabela `clientes` no **MySQL Workbench 8.0 CE** passo a passo. Como você já tem o Workbench instalado, vamos direto ao ponto:

---

## ✅ 1. **Abrir conexão local**

1. Abra o **MySQL Workbench**.
2. Na tela inicial, clique na conexão com nome algo como:

   ```
   Local instance MySQL80
   ```

   (ou crie uma nova conexão se ainda não tiver, usando `localhost`, porta `3306`, e seu usuário/senha – provavelmente `root` / `root` ou `mysql` / `mysql`).

---

## ✅ 1. **Abrir conexão local** (VERSÃO DETALHADA, ZOOM IN)



## ✅ Atualizando o **Passo 1 – Abrir Conexão Local**

Na **tela inicial** do MySQL Workbench, você deve ver um quadrado com o nome **`MySQL Connection`** (ou similar). Aqui está o que fazer:

### 🔹 Se já tiver uma conexão configurada (como `MySQL Connection`):

1. **Clique no quadrado** chamado `MySQL Connection` (ou o nome que apareceu).
2. Vai abrir uma nova aba com a interface para digitar comandos SQL.

> Se ao clicar pedir senha: é a senha que você definiu na instalação do MySQL (muitas vezes é `root`, `mysql`, ou uma que você criou).

---

### 🔹 Se **não** tiver nenhuma conexão configurada ainda (ou quiser criar do zero):

1. Clique no **botão de `+`** ao lado de `MySQL Connection`.
2. Em **Connection Name**, coloque algo como `localhost`.
3. Em **Hostname**, deixe `127.0.0.1` ou `localhost`.
4. Em **Port**, deixe `3306`.
5. Em **Username**, coloque o seu usuário (ex: `root` ou `mysql`).
6. Clique em **Store in Vault** para salvar a senha (coloque a senha que você definiu na instalação).
7. Clique em **Test Connection**:

   * Se der certo, clique em **OK**.
   * Se não, revise user/senha/porta.

Depois de criada, a nova conexão vai aparecer como um quadrado na tela inicial. É só clicar nela e seguir com o **Passo 2** normalmente.

---



## ✅ 2. **Criar o banco de dados**

1. No menu superior, clique em **`File > New Query Tab`** (ou `Ctrl + T`).
2. Copie e cole o seguinte SQL:

```sql
CREATE DATABASE crud_cliente_demo;
USE crud_cliente_demo;
```

3. Clique no raio ⚡ (ícone de "Executar") para rodar o script.

---

## ✅ 3. **Criar a tabela `clientes`**

No mesmo editor, cole e execute este SQL:

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

## ✅ 4. **Verificar se deu certo**

1. No painel esquerdo, vá em **SCHEMAS** e clique com o botão direito sobre `crud_cliente_demo` > **Set as Default Schema**.
2. Expanda o schema > `Tables` > você verá `clientes`.

---

## ✅ 5. **Testar inserção (opcional)**

Se quiser testar direto no Workbench:

```sql
INSERT INTO clientes (nome, endereco, email, telefone)
VALUES ('Maria Silva', 'Rua das Flores, 123', 'maria@email.com', '99999-9999');
```

Depois:

```sql
SELECT * FROM clientes;
```

---

## ✅ 6. **Pronto!**

Seu banco e tabela estão prontos para o backend consumir!


