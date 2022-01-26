import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/userService";
import UsersPosts from "../../components/UsersPosts/UsersPosts";


const PostsOfUser = () => {
    const {id} = useParams();

    const [usersPosts,setUsersPosts] = useState(null);

    useEffect(()=>{
        userService.getUsersPosts(id).then(value => setUsersPosts(value));
    },[])


    return (
        <div>
            {usersPosts && (usersPosts.map(post=><UsersPosts key={post.id} post={post}/>)
            )}
        </div>
    );
};

export default PostsOfUser;