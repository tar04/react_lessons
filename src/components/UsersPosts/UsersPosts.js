import React from 'react';


const UsersPosts = ({post: {id, title, body}}) => {
    return (
        <div>
            <h3>{id}) {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default UsersPosts;