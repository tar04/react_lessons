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
            return rejectWithValue(e);
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
            state.cars.push(action.payload.data);
        },
        deleteCar: (state, action) => {
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

export const {addCar, deleteCar} = carSlice.actions;
export default carReducer;