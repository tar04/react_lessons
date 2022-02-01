import {axiosService} from "./axiosService";
import {urls} from "../config/urls";


export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
}