import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/carService";
import {carValidator} from "../../validators/carValidator";


const Form = ({update, updatedCar: {id, model, price, year}}) => {

    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [id])

    const submit = (car) => {
        if (id) {
            carService.updateById(id, car).then(value => update(value));
            return;
        }
        carService.create(car).then(value => update(value))
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>{id ? 'Оновити авто' : 'Додати авто'}</button>
            </form>
        </div>
    );
};

export default Form;