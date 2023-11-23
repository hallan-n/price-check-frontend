



function Product({product_name, price, average_rating}) {
    // product_id: int = None
    // product_name: str = None
    // description: str = None
    // category: str = None
    // brand: str = None
    // model: str = None
    // price: str = None
    // product_url: str = None
    // average_rating: str = None
    // availability: str = None
    // store_id: int = None 

    return (
        <div className="bg-slate-600 text-white p-4 rounded">
            <img src="https://a-static.mlcdn.com.br/800x560/massageador-eletrico-profissional-muscular-pistola-original-massageador-muscular-eletrico/lojanaweb/0cb40156e27b11ecbc864201ac185078/e35b9c6bcb2c2619bf78cf8f3da62f73.jpeg" alt="" />
            <div className="flex items-center pt-3">
                <div className="p-3 break-words overflow-hidden">{product_name}</div>
                <div className="flex flex-col gap-3">
                    <p className="p-3 text-center rounded-md bg-yellow-600">★&nbsp;{average_rating}</p>
                    <a className="p-3 text-center rounded-md whitespace-nowrap bg-green-600" href="#">R$ {price}</a>
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
