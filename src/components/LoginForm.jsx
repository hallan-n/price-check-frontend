import { useState } from 'react'
import axios from 'axios';

function LoginForm() {
    const [dadosLogin, setDadosLogin] = useState({
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
            const response = await axios.post('http://127.0.0.1:8000/auth', dadosLogin, {
                withCredentials: true,
            });
            localStorage.setItem('accessToken', response.data.access_token);

        } catch (error) {
            console.error('Erro:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-96 gap-2">
                <h1 className="text-white text-2xl mb-2 text-center font-bold">Logar</h1>
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
                    name="password"
                    placeholder="Senha"
                    value={dadosLogin.password}
                    onChange={handleChange}
                />
                <button
                    className="bg-slate-800 rounded-md p-4 text-white hover:bg-slate-700 transition"
                    type="submit"
                >Entrar</button>
                <div className='flex justify-between'>
                    <a className="text-blue-600 text-center font-bold mt-2" href="/user">Criar conta</a>
                    <a className="text-blue-600 text-center font-bold mt-2" href="/check">Ir para checks</a>
                </div>
            </div>
        </form>
    );
}

export default LoginForm
