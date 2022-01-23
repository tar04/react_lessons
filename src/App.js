import {useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";


function App() {

    const [trigger, setTrigger] = useState(null);
    const [updatedCar, setUpdatedCar] = useState({});

    return (
        <>
            <Form update={setTrigger} updatedCar={updatedCar}/>
            <Cars trigger={trigger} updateForm={setTrigger} updateCar={setUpdatedCar}/>
        </>
    );
}

export default App;
