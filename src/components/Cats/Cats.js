import React from 'react';

const Cats = ({cats, deleteCat}) => {

    return (
        <div>
            {cats.map(value =>
                <div key={value.id}>
                {value.name}<button onClick={() => {deleteCat(value.id)}}>Delete</button>
            </div>)}
        </div>
    );
};

export default Cats;