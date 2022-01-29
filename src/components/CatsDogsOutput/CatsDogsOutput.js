import React from 'react';

import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";

const CatsDogsOutput = ({cats, dogs, dispatch}) => {

    const deleteCat = (id) => {
        dispatch({type: 'deleteCat', payload: id})
    }

    const deleteDog = (id) => {
        dispatch({type: 'deleteDog', payload: id})
    }

    return (
        <div className={'animals'}>
            <Cats cats={cats} deleteCat={deleteCat}/>
            <Dogs dogs={dogs} deleteDog={deleteDog}/>
        </div>
    );
};

export default CatsDogsOutput;