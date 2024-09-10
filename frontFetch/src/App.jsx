import { useState, useEffect } from 'react';

function App() {
    const [clientes, setClientes] = useState([]);
    const [form, setForm] = useState({ nome: '', endereco: '', email: '', telefone: '' });

    // Função para buscar todos os clientes
    const fetchClientes = async () => {
        const response = await fetch('<http://localhost:3000/clientes>');
        const data = await response.json();
        setClientes(data);
    };

    useEffect(() => {
        fetchClientes();
    }, []);

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch('<http://localhost:3000/clientes>', {
        const response = await fetch('/clientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            fetchClientes(); // Atualiza a lista de clientes após a adição
            setForm({ nome: '', endereco: '', email: '', telefone: '' }); // Limpa o formulário
        }
    };

    return (
        <div>
            <h1>CRUD de Clientes</h1>

            {/* Formulário para adicionar clientes */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Endereço"
                    value={form.endereco}
                    onChange={(e) => setForm({ ...form, endereco: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Telefone"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                />
                <button type="submit">Adicionar Cliente</button>
            </form>

            {/* Lista de clientes */}
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>
                        {cliente.nome} - {cliente.email} - {cliente.telefone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
