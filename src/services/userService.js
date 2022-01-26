import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const userService={
    getAll:()=>axiosService.get(urls.users).then(value => value.data),
    getSingle:(id)=>axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getUsersPosts:(id)=>axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data)
}