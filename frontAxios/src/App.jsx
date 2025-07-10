import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [clientes, setClientes] = useState([]);
    const [clienteSelecionado, setClienteSelecionado] = useState(null);

    const [inputNome, setInputNome] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputEndereco, setInputEndereco] = useState('')
    const [inputTelefone, setInputTelefone] = useState('')

    const fetchClientes = async () => {
        try {
            const response = await axios.get('http://localhost:3000/clientes');
            setClientes(response.data);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    useEffect(() => {
        fetchClientes();
    }, []);

    useEffect(() => {
        console.log(clientes);
    }, [clientes]);

    const cadastrarCliente = async () => {
        try {
            const cliente = {
                nome: inputNome,
                endereco: inputEndereco,
                email: inputEmail,
                telefone: inputTelefone
            };
            const response = await axios.post('http://localhost:3000/clientes', cliente);
            if (response.status === 201) {
                fetchClientes();
                limparForm();
            }
        } catch (error) {
            console.error('Erro ao adicionar cliente:', error);
        }
    };

    const salvarCliente = async () => {
        try {
            const cliente = {
                nome: inputNome,
                endereco: inputEndereco,
                email: inputEmail,
                telefone: inputTelefone
            };
            const response = await axios.put(`http://localhost:3000/clientes/${clienteSelecionado.id}`, cliente);
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
            const response = await axios.get(`http://localhost:3000/clientes/${id}`);
            setClienteSelecionado(response.data);
            exibirCliente(response.data);
        } catch (error) {
            console.error('Erro ao buscar cliente por ID:', error);
        }
    };

    const deletarCliente = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/clientes/${id}`);
            if (response.status === 200) {
                fetchClientes();
            }
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
        }
    };

    function limparForm() {
        setInputNome('')
        setInputEmail('')
        setInputEndereco('')
        setInputTelefone('')
    }

    function exibirCliente(cliente) {
        setInputNome(cliente.nome || '')
        setInputEmail(cliente.email || '')
        setInputEndereco(cliente.endereco || '')
        setInputTelefone(cliente.telefone || '')
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
                    <label htmlFor="">Endereço</label>
                    <input
                        type="text"
                        placeholder="Praça da Árvore"
                        value={inputEndereco}
                        onChange={(event) => setInputEndereco(event.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        placeholder="jorge@florista.com"
                        value={inputEmail}
                        onChange={(event) => setInputEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="">Telefone</label>
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
                {console.log(clientes)}
                {clientes.map((cliente) => (
                    <div key={cliente.id} className='cliente'>
                        <h2>{cliente.nome}</h2>
                        <p>{cliente.email}</p>
                        <p>{cliente.telefone}</p>
                        <p>{cliente.endereco}</p>
                        <p>{cliente.id}</p>
                        <button onClick={() => buscarClientePorId(cliente.id)}>Editar</button>
                        <button onClick={() => deletarCliente(cliente.id)}>Deletar</button>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default App;
