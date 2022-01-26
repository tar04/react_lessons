import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/postService";
import './postDetails.css';

const PostDetails = () => {

    const {state} = useLocation();

    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state);
            return;
        }
        postService.getSingle(id).then(value => setPost(value));
    }, [id])

    return (
        <div className={'info'}>
            <div className={'post-details'}><h2>Info about post</h2>
                {post &&
                (<div>
                        <h4>Id of post: {post.id} title: {post.title}</h4>
                        <p>{post.body}</p>
                        <p>Id of user whose this post is - {post.userId}</p>
                        <button><Link to={'comments'}>Posts comments</Link></button>
                    </div>
                )}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostDetails;