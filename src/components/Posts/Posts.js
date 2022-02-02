import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "../Post/Post";
import {getAllPosts} from "../../store";
import './Posts.css';

const Posts = () => {

    const {posts, status, error} = useSelector(state => state['postsReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div className={'posts'}>
            {status === 'prending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};