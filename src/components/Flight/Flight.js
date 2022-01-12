import React from 'react';


import './Flight.css';

const Flight = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props;
    return (
        <div className='flight'>
            <div className='left'>
                <h2>{mission_name}</h2>
                <p>{launch_year}</p>
            </div>
            <div className='right'>
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    );
};

export default Flight;