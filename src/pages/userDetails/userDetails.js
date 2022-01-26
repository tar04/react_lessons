import React, {useEffect, useState} from 'react';
import {useLocation, Link, Outlet, useParams} from "react-router-dom";

import {userService} from "../../services/userService";
import './userDetails.css';

const UserDetails = () => {

    const {state} = useLocation();

    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }
        userService.getSingle(id).then(value => setUser(value));
    }, [id])

    return (
        <div className={'info'}>
            <div className={'user-details'}><h2>Info about user</h2>
                {user &&
                (<div>
                        <h4>Id: {user.id}, name: {user.name} ({user.username})</h4>
                        <p></p>
                        <p>Address: </p>
                        <p>Street: {user.address.street}, suite: {user.address.suite}, city: {user.address.city},
                            zipcode:{user.address.zipcode}</p>
                        <p>Contacts:</p>
                        <p>Phone: {user.phone}, email:{user.email}, website:{user.website}</p>
                        <p>Company:</p>
                        <p>Name: {user.company.name}</p>
                        <p>catchPhrase: {user.company.catchPhrase}, bs:{user.company.bs}</p>
                        <button><Link to={'posts'}>Users posts</Link></button>
                    </div>
                )}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default UserDetails;