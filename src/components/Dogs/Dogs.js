import React from 'react';

const Dogs = ({dogs, deleteDog}) => {

    return (
        <div>
            {dogs.map(value =>
                <div key={value.id}>
                {value.name}<button onClick={() => {deleteDog(value.id)}}>Delete</button>
                </div>)}
        </div>
    );
};

export default Dogs;