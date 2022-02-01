import React from 'react';

const Car = ({car:{id,model,price,year}}) => {
    return (
        <div className={'car'}>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
        </div>
    );
};

export {Car};