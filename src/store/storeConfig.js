import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./CarSlice";

const store = configureStore({
    reducer: {
        carReducer
    }
});
export default store;