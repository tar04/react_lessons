import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/carService";
import {object} from "joi";

const UpdateForm = () => {

    const {register, handleSubmit} = useForm();
    const [selCar, setSelCar] = useState(null);

    function submit(car) {
       carService.getById(car.id).then(value => setSelCar([...value]));


        carService.updateById(car.id, car)
        console.log(car)

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