import React from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/carService";

const UpdateForm = () => {

    const {register, handleSubmit} = useForm();

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
                <button>Оновити авто по його id</button>
            </form>
        </div>
    );
}


export default UpdateForm;