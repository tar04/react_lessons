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
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({newCar}));
        } catch (e) {
            console.log(e);
        }
    }
)

export const deleteCarById = createAsyncThunk(
    'carSlice/deleteCarById',
    async ({id}, {dispatch}) => {
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
    async ({id, data}, {dispatch}) => {
        try {
            const car=await carService.update(id, data);
            console.log(car)
            return car;
           // dispatch(getAllCars());
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
        error: null,
        carForUpdate: {}
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.newCar);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        updateCar: (state, action) => {
            state.carForUpdate = action.payload.car;
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
        [updateCarById.fulfilled]: (state, action) => {
            state.cars = {...state.cars,[state.cars]:action.payload.car}
        }
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar, updateCar} = carSlice.actions;
export default carReducer;