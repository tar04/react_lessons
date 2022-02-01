import React, {useEffect} from 'react';

import {Form} from "../Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {getAllCars} from "../../store";
import {Car} from "../Car/Car";
import './Cars.css';

const Cars = () => {

    const {cars,status,error} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars());
    },[])

    return (
        <div>
            <Form/>
            {status==='pending' && <h2>Loading...</h2>}
            {error&& <h2>{error}</h2>}
            <div className={'cars'}>
                {cars.map(car=><Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};