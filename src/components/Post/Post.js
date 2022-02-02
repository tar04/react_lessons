import React from 'react';

const Post = ({post:{id,title,body}}) => {
    return (
        <div>
            <h3>{id}) {title}</h3>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export {Post};