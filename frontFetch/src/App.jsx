import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [clientes, setClientes] = useState([]);
    const [clienteSelecionado, setClienteSelecionado] = useState(null);

    const [inputNome, setInputNome] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputEndereco, setInputEndereco] = useState('')
    const [inputTelefone, setInputTelefone] = useState('')

    const apiUrl = 'http://localhost:3000/clientes';

    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setClientes(data);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    const cadastrarCliente = async () => {
        const cliente = {
            nome: inputNome,
            endereco: inputEndereco,
            email: inputEmail,
            telefone: inputTelefone
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cliente)
            });
            if (response.status === 201) {
                fetchClientes();
                limparForm();
            }
        } catch (error) {
            console.error('Erro ao adicionar cliente:', error);
        }
    };

    const salvarCliente = async () => {
        const cliente = {
            nome: inputNome,
            endereco: inputEndereco,
            email: inputEmail,
            telefone: inputTelefone
        };

        try {
            const response = await fetch(`${apiUrl}/${clienteSelecionado.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cliente)
            });
            if (response.status === 200) {
                fetchClientes();
                setClienteSelecionado(null);
                limparForm();
            }
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
        }
    };

    const buscarClientePorId = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/${id}`);
            const data = await response.json();
            setClienteSelecionado(data);
            exibirCliente(data);
        } catch (error) {
            console.error('Erro ao buscar cliente por ID:', error);
        }
    };

    const deletarCliente = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE'
            });
            if (response.status === 200) {
                fetchClientes();
            }
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
        }
    };

    function limparForm() {
        setInputNome('');
        setInputEmail('');
        setInputEndereco('');
        setInputTelefone('');
    }

    function exibirCliente(cliente) {
        setInputNome(cliente.nome || '');
        setInputEmail(cliente.email || '');
        setInputEndereco(cliente.endereco || '');
        setInputTelefone(cliente.telefone || '');
    }

    return (
        <div className='app-container'>
            <h1>CRUD de Clientes</h1>

            <div className='form'>
                <div className="input-container">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        placeholder="Jorge Tadeu"
                        value={inputNome}
                        onChange={(event) => setInputNome(event.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="endereco">Endereço</label>
                    <input
                        type="text"
                        placeholder="Praça da Árvore"
                        value={inputEndereco}
                        onChange={(event) => setInputEndereco(event.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="jorge@florista.com"
                        value={inputEmail}
                        onChange={(event) => setInputEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="text"
                        placeholder="48 99999-9999"
                        value={inputTelefone}
                        onChange={(event) => setInputTelefone(event.target.value)}
                    />
                </div>
                {clienteSelecionado && <button type="button" onClick={salvarCliente}>Salvar Alterações</button>}
                {!clienteSelecionado && <button type="button" onClick={cadastrarCliente}>Cadastrar Cliente</button>}
            </div>

            <section className='clientes'>
                {clientes.map((cliente) => (
                    <div key={cliente.id} className='cliente'>
                        <h2>{cliente.nome}</h2>
                        <p>{cliente.email}</p>
                        <p>{cliente.telefone}</p>
                        <p>{cliente.endereco}</p>
                        <p>ID: {cliente.id}</p>
                        <button onClick={() => buscarClientePorId(cliente.id)}>Editar</button>
                        <button onClick={() => deletarCliente(cliente.id)}>Deletar</button>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default App;
