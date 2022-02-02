import axios from "axios";

import {baseURL, baseURLCars} from "../config/urls";

const axiosServiceCars = axios.create({baseURL: baseURLCars});
const axiosService = axios.create({baseURL});

export {axiosServiceCars,axiosService};
