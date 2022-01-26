import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const postService={
    getAll:()=>axiosService.get(urls.posts).then(value => value.data),
    getSingle:(id)=>axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getPostsComments:(id)=>axiosService.get(`${urls.posts}/${id}${urls.comments}`).then(value => value.data)
}