import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

export const CommentService={
    getAll:()=>axiosService.get(urls.comments).then(value => value.data)
}