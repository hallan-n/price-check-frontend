import { useState, useEffect } from 'react'
import axios from 'axios';

function FormLoginStore() {
    const [store, setStore] = useState()
    const [user, setUser] = useState()
    const [login, setLogin] = useState({
        username: '',
        password: '',
        user_id: '',
        store_id: '1',
    });


    useEffect(() => {
        const handleGetData = async () => {
            const respStore = await axios.get('http://127.0.0.1:8000/store', { headers: { 'token': localStorage.getItem('accessToken') } });
            const respUser = await axios.get('http://127.0.0.1:8000/user', { headers: { 'token': localStorage.getItem('accessToken') } });
            setStore(respStore.data)
            setUser(respUser.data)
            setLogin((prevLogin) => ({
                ...prevLogin
            }));
        };
        handleGetData()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
                const response = await axios.post('http://127.0.0.1:8000/login', login, {
                    headers: {
                        'token': localStorage.getItem('accessToken')
                    }
                });
        } catch (error) {
            console.error('Erro:', error.message);
        }
    };

    const handleChange = (event) => {
        setLogin(prevLogin => ({
            ...prevLogin,
            [event.target.name]: event.target.value,
            "user_id": user.user_id,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-96 gap-2">
                <h1 className="text-white text-2xl mb-2 text-center font-bold">Login na Loja</h1>
                <input
                    className="bg-slate-600 rounded-md p-4 text-white"
                    type="text"
                    name="username"
                    placeholder="Login"
                    onChange={handleChange}
                    value={login.username}
                />
                <input
                    className="bg-slate-600 rounded-md p-4 text-white"
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={handleChange}
                    value={login.password}
                />
                <div className='flex justify-between gap-3'>
                    <button
                        className="bg-slate-800 rounded-md p-4 text-white hover:bg-slate-700 transition w-full"
                        type="submit"
                    >Criar</button>
                    <select name='store_id'
                        onChange={handleChange}
                        className='bg-slate-800 rounded-md p-4 text-white hover:bg-slate-700 transition w-full'>
                        <option disabled >Selecione</option>
                        {store ? store.map((str, index) => (<option key={index} value={str.store_id}>{str.store_name}</option>)) : null}
                    </select>
                </div>
            </div>
        </form>
    );
}

export default FormLoginStore
