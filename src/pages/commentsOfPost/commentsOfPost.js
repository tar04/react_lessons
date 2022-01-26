import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/postService";
import PostsComments from "../../components/PostsComments/PostsComments";

const CommentsOfPost = () => {

    const {id} = useParams();

    const [postsComments, setPostsComments] = useState(null);

    useEffect(() => {
        postService.getPostsComments(id).then(value => setPostsComments(value));
    }, [])

    return (
        <div>
            {postsComments && (postsComments.map(comments => <PostsComments key={comments.id} comments={comments}/>))}
        </div>
    );
};

export default CommentsOfPost;