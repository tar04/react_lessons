import React, {useEffect, useState} from 'react';

import {postService} from "../../services/postService";
import Post from "../Post/Post";
import './Posts.css';


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    }, []);

    return (
        <div className={'posts'}>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;