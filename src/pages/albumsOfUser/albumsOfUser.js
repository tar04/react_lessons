import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/userService";
import Albums from "../../components/Albums/Albums";

const AlbumsOfUser = () => {


    const {id} = useParams();

    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        userService.getUsersAlbums(id).then(value => setAlbums(value));
    }, [id])

    return (
        <div className={'info'}>
            <div className={'albums'}>
                <h2>Albums of this user</h2>
                <Albums albums={albums}/>
                </div>
            <div><Outlet/></div>
        </div>
    );
};

export default AlbumsOfUser;