import React from 'react';
import {Link} from 'react-router-dom';

import './User.css';

const User = ({user}) => {
    const {id, name, username}=user;

    return (
        <div className={'user'}>
            {id}) {name} (username: {username}) <button><Link to={id.toString()} state={{...user}}>Details about user</Link></button>
        </div>
    );
};

export default User;