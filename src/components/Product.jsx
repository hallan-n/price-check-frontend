function Product({product_name, price, average_rating, image_url, store_id}) {
    let text;
    if (store_id === 1){
        text = 'Magazine'
    }else if(store_id == 2){
        text = 'Havan'
    }
    return (
        <div className="bg-slate-600 text-white p-4 rounded flex flex-col justify-between">
            <img src={image_url} alt="" />
            <div className="flex items-center pt-3 max-h-30">
                <div className="p-3 break-words overflow-hidden">{product_name}</div>
                <div className="flex flex-col gap-3">
                    <p className="p-3 text-center rounded-md bg-yellow-600">★&nbsp;{average_rating}</p>
                    <p className="p-3 text-center rounded-md whitespace-nowrap bg-green-600">R$ {price}</p>
                    <p className="p-3 text-center rounded-md whitespace-nowrap bg-blue-600">{text}</p>
                </div>
            </div>
            <button
                className="mt-4 bg-slate-800 rounded-md p-4 w-full text-white hover:bg-slate-700 transition"
                type="submit"
            >Adicionar ao carrinho</button>
        </div>
    )
}

export default Product
