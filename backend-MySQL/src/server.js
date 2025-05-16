const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',      // Altere para o nome do seu user no MySQL
    password: 'root',    // Altere para a senha correta
    database: 'crud_cliente_demo',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(cors());
app.use(express.json());

app.get('/clientes', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM clientes');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

app.get('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar cliente' });
    }
});

app.post('/clientes', async (req, res) => {
    const { nome, endereco, email, telefone } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO clientes (nome, endereco, email, telefone) VALUES (?, ?, ?, ?)',
            [nome, endereco, email, telefone]
        );
        const [novoCliente] = await pool.query('SELECT * FROM clientes WHERE id = ?', [result.insertId]);
        res.status(201).json(novoCliente[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar cliente' });
    }
});

app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, endereco, email, telefone } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE clientes SET nome = ?, endereco = ?, email = ?, telefone = ? WHERE id = ?',
            [nome, endereco, email, telefone, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        const [clienteAtualizado] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
        res.json(clienteAtualizado[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
});

app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM clientes WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json({ message: 'Cliente deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
