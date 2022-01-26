import React from 'react';

import './Photo.css';

const Photo = ({photo:{title,url}}) => {
    return (
        <div className={'photo'}>
            <h4>{title} (photo size is 1.5:1)</h4>
            <img src={url} alt={{title}}/>
        </div>
    );
};

export default Photo;