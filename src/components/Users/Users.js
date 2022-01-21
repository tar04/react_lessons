import React from 'react';
import {useEffect, useState} from "react";

import UserComponent from "../userComponent/userComponent";
import {getUsers} from "../../services/userService";

const Users = ({chooseUser}) => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])


    return (
        <div className={'users'}>
            {
                users.map(value =>
                    <UserComponent
                        key={value.id}
                        item={value}
                        chooseUser={chooseUser}
                    />)
            }
        </div>
    );
};

export default Users;