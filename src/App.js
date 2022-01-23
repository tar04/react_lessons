import {useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";


function App() {

    const [trigger, setTrigger] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);

    return (
        <>
            <Form update={setTrigger}/>
            <Cars trigger={trigger} update={setTrigger}/>
        </>
    );
}

export default App;
