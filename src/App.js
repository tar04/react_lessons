import {useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import UpdateForm from "./components/UpdateForm/updateForm";


function App() {

    const [trigger, setTrigger] = useState(null);


    return (
        <>
            <div className={'forms'}>
                <Form update={setTrigger}/>
                <UpdateForm/>
            </div>

            <Cars trigger={trigger}/>
        </>
    );
}

export default App;
