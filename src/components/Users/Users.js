import React, {useEffect, useState} from 'react';
import User from "../User/User";
import {getUsers} from "../../services/UserServices/UserServices";

const Users = (searchName,searchUsername,searchEmail) => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Users;