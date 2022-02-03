import {Form, Tasks} from "./components";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";
import './App.css';

function App() {
    return (
        <div >
            <CompletedTasks/>
            <div className={'center'}><Form/></div>
            <hr/>
            <div className={'center'}><Tasks/></div>
        </div>
    );
}

export default App;
