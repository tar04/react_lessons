import React from 'react';
import {Outlet} from "react-router-dom";

import Posts from "../../components/Posts/Posts";

const PostsPage = () => {
    return (
        <>
            <div className={'main'}>
                <Posts/>
                <Outlet/>
            </div>
        </>
    );
};

export default PostsPage;