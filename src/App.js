import {useReducer, useState} from "react";

import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCats': {
            return {...state, cats: [...state.cats,action.payload]};
        }

    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});


    const send = (e) => {
        e.preventDefault();
        if (!!e.target.catsInput.value){
            dispatch({type: 'addCats', payload: e.target.catsInput.value})
            e.target.catsInput.value='';
        }else{
            return;
        }
    }

    return (
        <div>
            <div className={'forms'}>
                <div>
                    <form name={'cats'} onSubmit={send}><label>Add cat:
                        <input type="text" name={'catsInput'}/></label>
                        <button>Save</button>
                    </form>
                </div>
            </div>
            <hr/>
            <div className={'animals'}>
                {<div className={'cats'}>{state.cats.map(value => <div>{value} <button>Delete</button></div>)}</div>}
            </div>
        </div>
    );
}

export default App;
