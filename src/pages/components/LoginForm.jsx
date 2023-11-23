import { useState } from 'react'
import axios from 'axios';

function LoginForm() {


    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (event) => {
        formData = {
            username: username,
            password: password,
        }
        try {
            const resposta = await axios.post('http://localhost:8000/auth', formData);
            console.log('Resposta do servidor:', resposta.data);
        } catch (erro) {
            console.error('Erro ao enviar dados:', erro.message);
        }
    };


    return (
        <>
            <div className="flex flex-col w-96 gap-2">
                <h1 className="text-white text-2xl mb-2 text-center font-bold">Login</h1>
                <input
                    className="bg-slate-600 rounded-md p-4 text-white"
                    type="text"
                    name=""
                    id=""
                    placeholder="User"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    className="bg-slate-600 rounded-md p-4 text-white"
                    type="password"
                    name=""
                    id=""
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="bg-slate-800 rounded-md p-4 text-white hover:bg-slate-700 transition"
                    type="submit"
                    onClick={handleSubmit}
                >Entrar</button>
                <a className="text-blue-600 text-center font-bold mt-2" href="#">Criar conta</a>
            </div>
        </>
    )
}

export default LoginForm
