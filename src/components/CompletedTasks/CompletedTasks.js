import {useSelector} from "react-redux";

const CompletedTasks = () => {

    const {allTasks,completedTasks} = useSelector(state => state['taskReducer']);

    return (
        <div><h1 className={'center'}>All: {allTasks} Completed: {completedTasks}</h1></div>
    );
};

export default CompletedTasks;