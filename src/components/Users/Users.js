import React, {useEffect, useState} from 'react';


import User from "../User/User";
import './Users.css';


const Users = () => {
    const [usersList, setUsersList] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsersList(users))
    }, []);

    return (
        <div className={'users'}>
            Users:
            {
                usersList.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username}
                                             email={value.email}/>)
            }
        </div>
    );
};

export default Users;