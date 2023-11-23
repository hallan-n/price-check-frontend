import Product from "../components/Product"
import { useState } from 'react'
import axios from 'axios';

function PriceHome() {
    const [product, setProduct] = useState([])
    const handleSubmit = async (event) => {
        const response = await axios.get('http://127.0.0.1:8000/product', {
            headers: {
                'token': localStorage.getItem('accessToken')
            }
        });
        console.log(response.data);
        if (response) {
            setProduct(response.data)
        }
    };
    <button type="button" onClick={handleSubmit}></button>






    return (

        <div className='bg-slate-900 h-full'>

            <div >

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">

                    {product ? product.map(item => <Product product_name={item.product_name} price={item.price} average_rating={item.average_rating} />)  : null}
               

                </div>

                <button type="submit" onClick={handleSubmit}>teste</button>
            </div>
        </div >

    )
}

export default PriceHome
