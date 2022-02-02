import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {postService} from "../services/postService";

export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await postService.getAll();
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.posts=action.payload;
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});

const postsReducer=postsSlice.reducer;

export default postsReducer;