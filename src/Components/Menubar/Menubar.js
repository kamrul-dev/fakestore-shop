import React from 'react';
import './Menubar.css'

const Menubar = () => {

    return (
        <div>
            <div className="container d-flex">
                <div className="col-md-2">Logo</div>
                <div className="col-md-10 d-flex menu-container">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Login</li>
                </div>
            </div>

        </div>
    );
};

export default Menubar;