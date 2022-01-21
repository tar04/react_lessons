import React from 'react';
import {useEffect, useState} from "react";

import './chosenUser.css';

const ChosenUser = ({chosenUser: {id, name, username, email, address:{street,suite,city}},choosePosts}) => {

    return (
        <div className={'user-details'}>
            <div>
                <h1>User details</h1>
                <h3>Id:{id}, name:{name}</h3>
                <h4>Username: {username}; email:{email}</h4>
                <h5>Address:{street} street, {suite} ,
                    city: {city}</h5>
            </div>
            <button onClick={() => {
                choosePosts(id);
            }}>Get posts
            </button>
        </div>
    );
};

export default ChosenUser;
