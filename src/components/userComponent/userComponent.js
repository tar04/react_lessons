import React from 'react';

import './userComponent.css';

const UserComponent = ({item, chooseUser}) => {
    return (
        <div className={"user"}>
            <h4>{item.id} - {item.name}</h4>
            <button onClick={() => {
                chooseUser(item.id)
            }}>Get details</button>
        </div>
    );
};

export default UserComponent;