import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store";
import {User} from "../User/User";
import "./Users.css";

const Users = () => {

    const {users, status, error} = useSelector(state => state['usersReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return (

        <div className={'users'}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};