import React, {useEffect, useState} from 'react';

import {userService} from "../../services/userService";
import User from "../User/User";
import './Users.css';

const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, []);


    return (
        <div className={'users'}>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;