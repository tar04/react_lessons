import React from 'react';

import ChosenPosts from "../chosenPosts/chosenPosts";

const Posts = ({posts}) => {

    return (
        <div className={'bottom-content'}>
            {
                posts && posts.map((post) =>
                    <ChosenPosts
                        key={post.id}
                        post={post}
                    />)
            }
        </div>
    );
};

export default Posts;