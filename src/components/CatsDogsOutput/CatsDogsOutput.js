import React from 'react';

const CatsDogsOutput = ({state}) => {
    return (
        <div className={'animals'}>
            {<div className={'cats'}>
                {state.cats.map(value => <div>{value}<button>Delete</button></div>)}
            </div>}

            {<div className={'dogs'}>
                {state.dogs.map(value => <div>{value}<button>Delete</button></div>)}
            </div>}
        </div>
    );
};

export default CatsDogsOutput;