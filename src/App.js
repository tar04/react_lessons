import {useReducer} from "react";

import reducer from "./reducer/reducer";
import CatDogsForms from "./components/CatDogsForms/CatDogsForms";
import CatsDogsOutput from "./components/CatsDogsOutput/CatsDogsOutput";
import './App.css';

function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>
            <CatDogsForms dispatch={dispatch}/>
            <hr/>
            <CatsDogsOutput cats={state.cats} dogs={state.dogs} dispatch={dispatch}/>
        </div>
    );
}

export default App;
