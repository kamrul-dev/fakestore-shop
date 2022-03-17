import React, { useEffect, useState } from 'react';
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
        </div>
    );
};

export default Allproducts;