import React from 'react'
import { useState, useEffect } from 'react';

function ApiExemple() {

    const [items] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .catch(err => console.log(err));
    }, []);

    // Vue
    return (
        <div className="container">
            <h5>Api Exemple : </h5>
            {items.map((item) => {
                <p>{item.name}</p>
            })}
        </div>
    )
}

export default ApiExemple;
