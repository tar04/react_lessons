import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {userService} from "../services/userService";

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await userService.getAll();
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const usersReducer = usersSlice.reducer;

export default usersReducer;