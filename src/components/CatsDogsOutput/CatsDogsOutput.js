import React from 'react';

const CatsDogsOutput = ({state,dispatch}) => {

    const deleteCat = (id) => {
      dispatch({type:'deleteCat',payload:id})
    }

    return (
        <div className={'animals'}>
            {<div className={'cats'}>
                {state.cats.map(value => <div key={value.id}>{value.name}<button onClick={deleteCat(value.id)}>Delete</button></div>)}
            </div>}

            {<div className={'dogs'}>
                {state.dogs.map(value => <div>{value}<button>Delete</button></div>)}
            </div>}
        </div>
    );
};

export default CatsDogsOutput;