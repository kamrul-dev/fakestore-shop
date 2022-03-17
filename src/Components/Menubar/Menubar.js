import React from 'react';

const Menubar = (props) => {
    const {country} = props;
    return (
        <div>
            <h1>{country}</h1>
        </div>
    );
};

export default Menubar;