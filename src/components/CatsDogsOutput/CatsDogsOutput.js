import React from 'react';
import Cats from "../Cats/Cats";

const CatsDogsOutput = ({state,dispatch}) => {

    const deleteCat = (id) => {
      dispatch({type:'deleteCat',payload: {id}})
    }

    return (
        <div className={'animals'}>
            <Cats state={state} deleteCat={deleteCat}/>

            {<div className={'dogs'}>
              {/*{state.dogs.map(value => <div>{value}<button>Delete</button></div>)}*/}
            </div>}
        </div>
    );
};

export default CatsDogsOutput;