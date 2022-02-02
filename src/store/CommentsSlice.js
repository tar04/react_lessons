import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {commentService} from "../services/commentService";

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return await commentService.getAll();
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const commentsReducer = commentsSlice.reducer;

export default commentsReducer;