import React from 'react';
import {Link} from 'react-router-dom';

import './User.css';

const User = ({user}) => {
    const {id, name, username}=user;

    return (
        <div className={'user'}>
            {id}) {name} (username: {username})
            <div className={'buttons'}>
                <button><Link to={id.toString() + '/details'} state={{...user}}>Details about user</Link></button>
                <button><Link to={id + '/albums'}>Users albums</Link></button>
            </div>
        </div>
    );
};

export default User;