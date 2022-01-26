import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {photosService} from "../../services/photosService";
import Photo from "../../components/Photo/Photo";
import './photos.css';

const Photos = () => {

    const {state: id} = useLocation();

    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        photosService.getAllById(id).then(value => setPhotos(value))
    }, [id])

    return (
        <div><h2>Photos</h2>
            <div className={'photos'}>
                {photos && photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};

export default Photos;