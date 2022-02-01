import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

export const PostService={
    getAll:()=>axiosService.get(urls.posts).then(value => value.data)
}