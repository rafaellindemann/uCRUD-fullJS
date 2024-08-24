const express = require('express');
const { Pool } = require('pg');
const app = express();

app.use(express.json());

// Configuração da conexão com o PostgreSQL
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'crud_cliente_demo', // Nome da sua database
    password: 'postgre', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Rota para criar um novo cliente (POST)
app.post('/clientes', async (req, res) => {
    const { nome, endereco, email, telefone } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO clientes (nome, endereco, email, telefone) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, endereco, email, telefone]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para obter todos os clientes (GET)
app.get('/clientes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clientes');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para obter um cliente por ID (GET)
app.get('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para atualizar um cliente (PUT)
app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, endereco, email, telefone } = req.body;
    try {
        const result = await pool.query(
            'UPDATE clientes SET nome = $1, endereco = $2, email = $3, telefone = $4 WHERE id = $5 RETURNING *',
            [nome, endereco, email, telefone, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para deletar um cliente (DELETE)
app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.status(200).json({ message: 'Cliente deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Inicialização do servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});