import React from 'react';

import Album from "../Album/Album";

const Albums = ({albums}) => {
    return (
        <div>
            {albums && albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;