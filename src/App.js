import {useReducer, useState} from "react";

import reducer from "./reducer/reducer";
import './App.css';
import CatDogsForms from "./components/CatDogsForms/CatDogsForms";
import CatsDogsOutput from "./components/CatsDogsOutput/CatsDogsOutput";

function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>
            <CatDogsForms dispatch={dispatch}/>
            <hr/>
            <CatsDogsOutput state={state} dispatch={dispatch}/>
        </div>
    );
}

export default App;
