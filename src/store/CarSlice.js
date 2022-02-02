import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../services/carService";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll();
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data},{dispatch}) => {
        try {
            const newCar=await carService.create(data);
            dispatch(addCar({newCar}));
        } catch (e) {
            console.log(e);
        }
    }
)

export const deleteCarById = createAsyncThunk(
    'carSlice/deleteCarById',
    async ({id},{dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {
            console.log(e);
        }
    }
)

export const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async ({data.id,data},{dispatch}) => {
        try {
            await carService.update(data.id,data);
            dispatch();
        } catch (e) {
            console.log(e);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.newCar);
        },
        deleteCar: (state, action) => {
            state.cars=state.cars.filter(car=>car.id!==action.payload.id)
        },
        updateCar: (state, action) => {

        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar,updateCar} = carSlice.actions;
export default carReducer;