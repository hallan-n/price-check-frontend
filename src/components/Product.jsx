import axios from 'axios';
import { useState, useEffect } from 'react'

function Product({ product_id, product_name, description, category, brand, model, price, product_url, average_rating, availability, image_url, store_id }) {
    const [resp, setResponse] = useState("Adicionar ao carrinho")
    let product = {
        product_id: product_id,
        product_name: product_name,
        description: description,
        category: category,
        brand: brand,
        model: model,
        price: price,
        product_url: product_url,
        average_rating: average_rating,
        availability: availability,
        image_url: image_url,
        store_id: store_id,
    }

    let text;
    if (store_id == 1) {
        text = "Magazine"
    } else if (store_id == 2) {
        text = "Havan"
    }
    const handlePostProduct = async (event) => {
        
        const response = await axios.post('http://127.0.0.1:8000/rpa', product, {headers: {'token': localStorage.getItem('accessToken')}});
        if (response){
            setResponse(response.data.resp)
        }
    };

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
                type="button"
                onClick={handlePostProduct}
            >{resp}</button>
        </div>
    )
}

export default Product
