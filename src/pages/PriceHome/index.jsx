import Product from "../../components/Product"
import { useState, useEffect } from 'react'
import axios from 'axios';

function PriceHome() {
    const [product, setProduct] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState('');

    const handleGetItems = async (event) => {
        const response = await axios.get('http://127.0.0.1:8000/product', {
            headers: {
                'token': localStorage.getItem('accessToken')
            }
        });
        if (response) {
            setProduct(response.data)
            setFilteredProducts(response.data)
        }
    };
    useEffect(() => {
        handleGetItems()

    }, []);

    const handleFilterChange = (event) => {
        console.log("asdasd");
        const searchTerm = event.target.value;
        setFilter(searchTerm);
        const filtered = product.filter(product =>
            product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredProducts(filtered);
    };

    return (
        <div className='bg-slate-900 h-full'>

            <div className="flex flex-col justify-center mt-14 px-32 gap-3">
                <a className="text-blue-600 text-center font-bold mt-2" href="/">Voltar</a>
                <input
                    className="bg-slate-600 rounded-md p-4 text-white w-full"
                    type="text"
                    name="user_name"
                    placeholder="Buscar por nome"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>
            <div >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                {product ? filteredProducts.map(item => <Product product_id={item.product_id} product_name={item.product_name} description={item.description} category={item.category} brand={item.brand} model={item.model} price={item.price} product_url={item.product_url} average_rating={item.average_rating} availability={item.availability} image_url={item.image_url} store_id={item.store_id} />) : null}
                </div>
            </div>
        </div >
    )
}

export default PriceHome
