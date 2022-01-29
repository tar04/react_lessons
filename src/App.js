import {useReducer, useState} from "react";

import './App.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCats': {
            return {...state, cats: action.payload};
        }

    }
    //setForm({...form, [e.target.name]: e.target.value});
}

function App() {

    const [state, dispatch] = useReducer(reducer, {cats: null, dogs: null});


    const send = (e) => {
        e.preventDefault();
        dispatch({type: 'addCats', payload: e.target.catsInput.value})
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
                {<div className={'cats'}>{state.cats}</div>}
            </div>
        </div>
    );
}

export default App;
