import {useDispatch} from "react-redux";

import {changeCheck, deleteTask} from "../../store";
import "./Task.css";

const Task = ({task}) => {

    const {id,name,done}=task;

    const dispatch = useDispatch();

    return (
        <div className={'task'}>
            <input type="checkbox" value={done} onChange={()=>dispatch(changeCheck({id}))}/>
            <h2 id={'name'} className={done ? 'completed':''}>{name}</h2>
            <button onClick={()=>{dispatch(deleteTask({id,done}))}}>Delete</button>
        </div>
    );
};

export {Task};