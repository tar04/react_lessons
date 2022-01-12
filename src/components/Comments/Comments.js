import React, {useEffect, useState} from 'react';

import Comment from "../Comment/Comment";
import './Comments.css';

const Comments = () => {
    const [commentsList, setCommentsList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => setCommentsList(comments))
    }, []);

    return (
        <div className={'comments'}>
            Comments:
            {
                commentsList.map(value => <Comment key={value.id} id={value.id} name={value.name} email={value.email}
                                                   body={value.body}/>)
            }
        </div>
    );
};

export default Comments;