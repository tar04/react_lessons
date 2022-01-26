import React from 'react';
import {Link} from 'react-router-dom';

const Album = ({album: {id, title}}) => {
    return (
        <div>
            <Link to={'photos'} state={id}>{id}) {title}</Link>
        </div>
    );
};

export default Album;