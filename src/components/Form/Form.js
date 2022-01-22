import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/carService";
import {carValidator} from "../../validators/carValidator";


const Form = ({update}) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    const submit = (car) => {
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
                <button>Додати авто</button>
            </form>
        </div>
    );
};

export default Form;