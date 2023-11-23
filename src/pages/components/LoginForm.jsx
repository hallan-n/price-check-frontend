import { useState } from 'react'

function LoginForm() {
    const [findUser, setFindUser] = useState()


    const handleFindUser = async () => {
        const find = await fetch(`http://localhost:8000/`)
    }

    return (
        <>
        <div className="flex flex-col w-96 gap-2">
            <h1 className="text-white text-2xl mb-2 text-center font-bold">Login</h1>
            <input className="bg-slate-600 rounded-md p-4 text-white" type="text" name="" id="" placeholder="User"/>
            <input className="bg-slate-600 rounded-md p-4 text-white" type="password" name="" id="" placeholder="Senha"/>
            <button className="bg-slate-800 rounded-md p-4 text-white hover:bg-slate-700 transition" type="button">Entrar</button>
            <a className="text-blue-600 text-center font-bold mt-2" href="#">Criar conta</a>
        </div>
        </>
    )
}
  
export default LoginForm
  