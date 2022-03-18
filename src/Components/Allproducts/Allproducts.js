import React, { useEffect, useState } from 'react';
import Singleproduct from '../Singleproduct/Singleproduct';
import './Allproducts.css'

// load data from api
const Allproducts = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>All products</h1>
            <div>
                {
                    products.map(product => <Singleproduct
                        product={product}
                        key={product.id}
                    ></Singleproduct>)
                }
            </div>
        </div>
    );
};

export default Allproducts;