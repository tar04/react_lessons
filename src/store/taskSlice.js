import {createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState: {
        tasks: [],
        allTasks:0,
        completedTasks:0
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({id: new Date().getTime(), name: action.payload.task, done: false});
            state.allTasks=++state.allTasks;
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
            state.allTasks=--state.allTasks;
            if(action.payload.done){
                state.completedTasks=--state.completedTasks
            }
        },
        changeCheck: (state, action) => {
            const compTask = state.tasks.find(task => task.id === action.payload.id);
            compTask.done = !compTask.done;
            if(compTask.done){
                state.completedTasks=++state.completedTasks
            }else{
                state.completedTasks=--state.completedTasks
            }
        }
    }
});

const taskReducer = taskSlice.reducer;

export default taskReducer;

export const {addTask, deleteTask, changeCheck} = taskSlice.actions;