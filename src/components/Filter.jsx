function Filter() {

    return (
        <div className="flex justify-center mt-14 px-32 gap-3">
            <input
                className="bg-slate-600 rounded-md p-4 text-white w-full"
                type="text"
                name="user_name"
                placeholder="Buscar por nome"
            />
            <button
                className="bg-slate-800 rounded-md p-4 text-white hover:bg-slate-700 transition"
                type="submit"
            >Buscar</button>
        </div>
    );
}

export default Filter
