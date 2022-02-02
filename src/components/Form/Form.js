import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import './Form.css'
import {useDispatch, useSelector} from "react-redux";
import {createCar, updateCarById} from "../../store";

const Form = () => {

    const {register, handleSubmit, reset,setValue} = useForm();

    const dispatch = useDispatch();

    const {carForUpdate} = useSelector(state => state['carReducer']);

    const {id,model,price,year}=carForUpdate;

    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [id])

    const submit = (data) => {
        if (id) {
            dispatch(updateCarById({id,data}));
            reset();
            return;
        }
        dispatch(createCar({data}));
        reset();

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model <input type="text" {...register('model')}/></label>
            <label>Price <input type="text" {...register('price')}/></label>
            <label>Year <input type="text" {...register('year')}/></label>
            <button>Send</button>
        </form>
    );
};

export {Form};