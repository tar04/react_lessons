import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Comment} from "../Commment/Comment";
import {getAllComments} from "../../store";
import "./Comments.css";

const Comments = () => {

    const {comments,status,error} = useSelector(state => state['commentsReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllComments());
    },[])

    return (
        <div className={'comments'}>
            {status==='pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};