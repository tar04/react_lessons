import React from 'react';


const ChosenPosts = ({post:{id,title,body}}) => {
    return (
        <div>
            <h2>Post id: {id} title:{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default ChosenPosts;