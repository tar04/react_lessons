import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarById, updateCarById} from "../../store";

const Car = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={'car'}>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(deleteCarById({id}))}>Delete car</button>
            <button onClick={() => dispatch(updateCarById({car}))}>Update car</button>
        </div>
    );
};

export {Car};