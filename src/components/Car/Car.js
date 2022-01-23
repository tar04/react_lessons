import React from 'react';

const Car = ({car:{id,model,price,year},deleteCar}) => {
    return (
        <div>
            <hr/>
            <div>Id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>{deleteCar(id)}}>Видалити машину</button>
            <button onClick={}>Оновити машину</button>
        </div>
    );
};

export default Car;