import {useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";


function App() {

    const [trigger, setTrigger] = useState(null);


    return (
        <>
            <Form update={setTrigger}/>
            <Cars trigger={trigger}/>
        </>
    );
}

export default App;
