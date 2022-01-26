import React from 'react';
import {Link} from 'react-router-dom';

import './Post.css';

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div className={'post'}>
            {id}) {title} <button><Link to={id.toString()} state={{...post}}>About post</Link></button>
        </div>
    );
};

export default Post;