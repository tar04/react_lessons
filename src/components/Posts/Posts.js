import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import './Posts.css';


const Posts = () => {
    const [postsList, setPostsList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPostsList(posts))
    }, []);

    return (
        <div className={'posts'}>
            Posts:
            {
                postsList.map(value => <Post key={value.id} id={value.id} title={value.title} body={value.body}/>)
            }
        </div>
    );
};

export default Posts;