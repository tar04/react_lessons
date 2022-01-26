import React from 'react';

const PostsComments = ({comments: {postId, id, name, email, body}}) => {
    return (
        <div>
            <h3>{name} ({email}) under post {postId} writes</h3>
            <p>{id}) {body}</p>
        </div>
    );
};

export default PostsComments;