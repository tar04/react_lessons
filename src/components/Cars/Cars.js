import React, {useEffect, useState} from 'react';

import {carService} from "../../services/carService";
import Car from "../Car/Car";

const Cars = ({trigger, update}) => {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger])

    const deleteCar = async (id) => {
        await carService.deleteById(id);
        update(id);
    }

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar}/>)}
        </div>
    );
};

export default Cars;