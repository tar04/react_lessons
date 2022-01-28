import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, count1: state.count1 + 1}
        case 'dec1':
            return {...state, count1: state.count1 - 1}
        case 'reset1':
            return {...state, count1: action.payload}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: action.payload}
        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'reset3':
            return {...state, count3: action.payload}
        default:
            return state;
    }

}

function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div>
            <div>
                <div>Count: {state.count1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec1'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset1', payload: 0})}>Reset</button>
            </div>
            <div>
                <div>Count: {state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec2'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset2', payload: 0})}>Reset</button>
            </div>
            <div>
                <div>Count: {state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec3'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset3', payload: 0})}>Reset</button>
            </div>
        </div>
    );
}

export default App;
