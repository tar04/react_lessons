import {useRef} from "react";
import {useDispatch} from "react-redux";

import {addTask} from "../../store";

const Form = () => {

    const taskInput = useRef();

    const dispatch = useDispatch();

    const send = (e) => {
        e.preventDefault();
        const task=taskInput.current.value;
        dispatch(addTask({task}));
        taskInput.current.value='';
    }

    return (
        <div>
            <form onSubmit={send}>
                <input type="text" placeholder={'todo'} ref={taskInput}/>
                <button >Save</button>
            </form>
        </div>
    );
};

export {Form};