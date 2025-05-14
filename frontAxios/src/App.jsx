import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [clientes, setClientes] = useState([]);
    // const [form, setForm] = useState({ nome: '', endereco: '', email: '', telefone: '' });
    const [selectedCliente, setSelectedCliente] = useState(null); // Cliente selecionado para update

    const [inputNome, setInputNome] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputEndereco, setInputEndereco] = useState('')
    const [inputTelefone, setInputTelefone] = useState('')

    // Função para buscar todos os clientes
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

    // Função para lidar com o envio do formulário (adicionar ou atualizar)
    const enviarCliente = async (e) => {
        e.preventDefault();
        try {
            let cliente = {
                nome: inputNome,
                endereco: inputEndereco,
                email: inputEmail,
                telefone: inputTelefone,
                // id: selectedCliente.id
            }
            if (selectedCliente) {
                // Atualizar cliente existente (PUT)
                const response = await axios.put(`http://localhost:3000/clientes/${selectedCliente.id}`, cliente);
                if (response.status === 200) {
                    fetchClientes(); // Atualiza a lista de clientes após a edição
                    setSelectedCliente(null); // Reseta o cliente selecionado
                }
            } else {
                // Adicionar novo cliente (POST)
                const response = await axios.post('http://localhost:3000/clientes', cliente);
                if (response.status === 201) {
                    fetchClientes(); // Atualiza a lista de clientes após a adição
                }
            }
        } catch (error) {
            console.error('Erro ao adicionar/atualizar cliente:', error);
        }
    };

    // Função para buscar cliente por ID
    const fetchClienteById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/clientes/${id}`);
            setSelectedCliente(response.data); // Seleciona o cliente para edição
            setForm(response.data); // Preenche o formulário com os dados do cliente
        } catch (error) {
            console.error('Erro ao buscar cliente por ID:', error);
        }
    };

    // Função para deletar cliente
    const deleteCliente = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/clientes/${id}`);
            if (response.status === 200) {
                fetchClientes(); // Atualiza a lista de clientes após a exclusão
            }
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
        }
    };

    function limparCampos() {
        setInputNome('')
        setInputEmail('')
        setInputEndereco('')
        setInputTelefone('')
    }

    return (
        <div>
            <h1>CRUD de Clientes</h1>

            {/* Formulário para adicionar/atualizar clientes */}
            <div>
                <input
                    type="text"
                    placeholder="Nome"
                    value={inputNome}
                    onChange={(event) => setInputNome(event.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Endereço"
                    value={inputEndereco}
                    onChange={(event) => setInputEndereco(event.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={inputEmail}
                    onChange={(event) => setInputEmail(event.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Telefone"
                    value={inputTelefone}
                    onChange={(event) => setInputTelefone(event.target.value)}
                />
                <button type="buton" onClick={enviarCliente}>
                    {selectedCliente ? 'Atualizar Cliente' : 'Adicionar Cliente'}
                </button>
            </div>

            {/* Lista de clientes */}
            <section className='clientes'>
                {clientes.map((cliente) => (
                    <div key={cliente.id} className='cliente'>
                        <p>{cliente.nome}</p>
                        <p>{cliente.email}</p>
                        <p>{cliente.telefone}</p>
                        <p>{cliente.endereco}</p>
                        <p>{cliente.id}</p>
                        <button onClick={() => fetchClienteById(cliente.id)}>Editar</button>
                        <button onClick={() => deleteCliente(cliente.id)}>Deletar</button>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default App;

