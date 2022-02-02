import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {createCar, updateCarById} from "../../store";
import {carValidator} from "../../validators/carValidator";
import './Form.css'

const Form = () => {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors}
    } = useForm({resolver: joiResolver(carValidator),mode:"onTouched"});

    const dispatch = useDispatch();

    const {carForUpdate} = useSelector(state => state['carReducer']);

    const {id, model, price, year} = carForUpdate;

    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [id])

    const submit = (data) => {
        if (id) {
            dispatch(updateCarById({id, data}));
            reset();
            return;
        }
        dispatch(createCar({data}));
        reset();

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model <input type="text" {...register('model')}/></label>
            {errors.model  && <p>{errors.model.message}</p>}
            <label>Price <input type="text" {...register('price')}/></label>
            {errors.price  && <p>{errors.price.message}</p>}
            <label>Year <input type="text" {...register('year')}/></label>
            {errors.year  && <p>{errors.year.message}</p>}
            <button>Send</button>
        </form>
    );
};

export {Form};