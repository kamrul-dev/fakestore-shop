import React, { useEffect, useState } from 'react';
import Singleproduct from '../Singleproduct/Singleproduct';
import './Allproducts.css'

// load data from api create All products components and send data from this component to single component
const Allproducts = (props) => {
    const { setCartCount } = props;
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div className='container'>
            <h1>All products</h1>
            <div className='row'>
                {
                    products.map(product => <Singleproduct
                        product={product}
                        key={product.id}
                        setCartCount={setCartCount}
                    ></Singleproduct>)
                }
            </div>
        </div>
    );
};

export default Allproducts;