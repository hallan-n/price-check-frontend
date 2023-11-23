import { useState } from 'react'
import axios from 'axios';

function LoginForm() {
    const [response, setResponse] = useState("Criar Login");
    const [color, setColor] = useState("text-white");
    const [dadosLogin, setDadosLogin] = useState({
        user_name: '',
        email: '',
        password: '',
    });
    const handleChange = (event) => {
        setDadosLogin({
            ...dadosLogin,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/user', dadosLogin, {
                withCredentials: true,
            });
            
            if (response.data === true) {
                setResponse("Login criado com sucesso!")
                setColor("text-green-500")
                
            }else{
                setResponse(response.data)
                setColor("text-red-500")
            }
        } catch (error) {
            console.error('Erro:', error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col w-96 gap-2">
                    <h1 className={`${color} text-2xl mb-2 text-center font-bold`}>
                        {response}
                    </h1>
                    <input
                        className="bg-slate-600 rounded-md p-4 text-white"
                        type="text"
                        name="user_name"
                        placeholder="Nome"
                        value={dadosLogin.user_name}
                        onChange={handleChange}
                    />
                    <input
                        className="bg-slate-600 rounded-md p-4 text-white"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={dadosLogin.email}
                        onChange={handleChange}
                    />
                    <input
                        className="bg-slate-600 rounded-md p-4 text-white"
                        type="password"
                        name="password" // Alteração do nome do campo para "password"
                        placeholder="Senha"
                        value={dadosLogin.password}
                        onChange={handleChange}
                    />
                    <button
                        className="bg-slate-800 rounded-md p-4 text-white hover:bg-slate-700 transition"
                        type="submit"
                    >Criar</button>
                    <a className="text-blue-600 text-center font-bold mt-2" href="/">Cancelar</a>
                </div>
            </form>
        </div>
    );
}

export default LoginForm
