import {axiosServiceCars} from "./axiosService";
import {urls} from "../config/urls";

export const carService = {
    getAll: () => axiosServiceCars.get(urls.cars).then(value => value.data),
    create: (car) => axiosServiceCars.post(urls.cars, car).then(value => value.data),
    update: (car,id) => axiosServiceCars.patch(urls.cars, car).then(value => value.data),
    deleteById: (id) => axiosServiceCars.delete(`${urls.cars}/${id}`)
}