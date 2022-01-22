import React from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";

const UpdateForm = () => {

    const {register, handleSubmit,formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    function submit(car) {
        carService.updateById(car.id, car)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Id: <input type="text" defaultValue={''} {...register('id')}/></label></div>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.id && <span>{errors.id.message}</span>}
                {errors.model && <span>{errors.model.message}</span>}
                {errors.price && <span>{errors.price.message}</span>}
                {errors.year && <span>{errors.year.message}</span>}
                <button>Оновити авто по його id</button>
            </form>
        </div>
    );
}


export default UpdateForm;