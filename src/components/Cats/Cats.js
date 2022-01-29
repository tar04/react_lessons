import React from 'react';

const Cats = ({state, deleteCat}) => {

    return (
        <div className={'cats'}>
            {state.cats.map(value =>
                <div key={value.id}>
                {value.name}
                <button onClick={() => {deleteCat(value.id)}}>Delete</button>
            </div>)}
        </div>
    );
};

export default Cats;