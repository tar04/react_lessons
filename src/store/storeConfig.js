import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./CarSlice";
import usersReducer from "./UsersSlice";
import postsReducer from "./PostsSlice";
import commentsReducer from "./CommentsSlice";

const store = configureStore({
    reducer: {
        carReducer,
        usersReducer,
        postsReducer,
        commentsReducer
    }
});
export default store;