import React from 'react';
import {useForm} from "react-hook-form";

import './Form.css'

const Form = () => {

    const {register,handleSubmit,reset} = useForm();

    const submit = () => {

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