import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const photosService={
    getAllById:(id)=>axiosService.get(`${urls.albums}/${id}${urls.photos}`).then(value => value.data),
}