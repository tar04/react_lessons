import React from 'react';
import {Outlet} from 'react-router-dom';

import Users from "../../components/Users/Users";

const UsersPage = () => {
    return (
        <>
            <div className={'main'}>
                <Users/>
                <Outlet/>
            </div>
        </>
    );
};

export default UsersPage;