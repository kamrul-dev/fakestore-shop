import './Singleproduct.css'

import React from 'react';

const Singleproduct = (props) => {
    const { title, image } = props.product;
    return (
        <div className='col-md-4'>
            <div className="card p-3 border">
                <img className='w-50' src={image} alt="" />
                <h1>{title.slice(0, 10)}</h1>
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-success'>Add to Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <button className='btn btn-danger'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Singleproduct;