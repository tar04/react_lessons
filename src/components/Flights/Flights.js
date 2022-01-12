import React, {useEffect, useState} from 'react';


import './Flights.css';
import Flight from "../Flight/Flight";

const Flights = () => {
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setFlights(value.filter(item => item.launch_year !== '2020')))
    }, []);

    return (
        <div>
            {
                flights.map(value => <Flight
                    key={value.flight_number}
                    mission_name={value.mission_name}
                    launch_year={value.launch_year}
                    mission_patch_small={value.links.mission_patch_small}
                />)
            }
        </div>
    );
};

export default Flights;