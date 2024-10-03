import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [clientes, setClientes] = useState([]);
    const [form, setForm] = useState({ nome: '', endereco: '', email: '', telefone: '' });
    const [selectedCliente, setSelectedCliente] = useState(null); // Cliente selecionado para update

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
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedCliente) {
                // Atualizar cliente existente (PUT)
                const response = await axios.put(`http://localhost:3000/clientes/${selectedCliente.id}`, form);
                if (response.status === 200) {
                    fetchClientes(); // Atualiza a lista de clientes após a edição
                    setForm({ nome: '', endereco: '', email: '', telefone: '' }); // Limpa o formulário
                    setSelectedCliente(null); // Reseta o cliente selecionado
                }
            } else {
                // Adicionar novo cliente (POST)
                const response = await axios.post('http://localhost:3000/clientes', form);
                if (response.status === 201) {
                    fetchClientes(); // Atualiza a lista de clientes após a adição
                    setForm({ nome: '', endereco: '', email: '', telefone: '' }); // Limpa o formulário
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

    return (
        <div>
            <h1>CRUD de Clientes</h1>

            {/* Formulário para adicionar/atualizar clientes */}
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
                <button type="submit">
                    {selectedCliente ? 'Atualizar Cliente' : 'Adicionar Cliente'}
                </button>
            </form>

            {/* Lista de clientes */}
            <ul>
                {clientes.map((cliente) => (
                    <li key={cliente.id}>
                        {cliente.nome} - {cliente.email} - {cliente.telefone}
                        <button onClick={() => fetchClienteById(cliente.id)}>Editar</button>
                        <button onClick={() => deleteCliente(cliente.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;



// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//     const [clientes, setClientes] = useState([]);
//     const [form, setForm] = useState({ nome: '', endereco: '', email: '', telefone: '' });

//     // Função para buscar todos os clientes
//     const fetchClientes = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/clientes');
//             setClientes(response.data);
//         } catch (error) {
//             console.error('Erro ao buscar clientes:', error);
//         }
//     };

//     useEffect(() => {
//         fetchClientes();
//     }, []);

//     // Função para lidar com o envio do formulário
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/clientes', form);
//             if (response.status === 201) {
//                 fetchClientes(); // Atualiza a lista de clientes após a adição
//                 setForm({ nome: '', endereco: '', email: '', telefone: '' }); // Limpa o formulário
//             }
//         } catch (error) {
//             console.error('Erro ao adicionar cliente:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>CRUD de Clientes</h1>

//             {/* Formulário para adicionar clientes */}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Nome"
//                     value={form.nome}
//                     onChange={(e) => setForm({ ...form, nome: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Endereço"
//                     value={form.endereco}
//                     onChange={(e) => setForm({ ...form, endereco: e.target.value })}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={form.email}
//                     onChange={(e) => setForm({ ...form, email: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Telefone"
//                     value={form.telefone}
//                     onChange={(e) => setForm({ ...form, telefone: e.target.value })}
//                 />
//                 <button type="submit">Adicionar Cliente</button>
//             </form>

//             {/* Lista de clientes */}
//             <ul>
//                 {clientes.map(cliente => (
//                     <li key={cliente.id}>
//                         {cliente.nome} - {cliente.email} - {cliente.telefone}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;
