import React from 'react';
import {useForm} from "react-hook-form";

import './Form.css'
import {useDispatch} from "react-redux";
import {createCar} from "../../store";

const Form = () => {

    const {register, handleSubmit, reset} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createCar({data}))
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