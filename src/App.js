import {useReducer} from "react";

import './App.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCats':
            return {...state, cats: state.cats.push(action.payload)}
    }

}

function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const send = (e) => {
        e.preventDefault();
        dispatch({type: 'addCats', payload:e.target.catsInput.value})

    }

    return (
        <div>
            <div className={'forms'}>
                <div>
                    <form name={'catsForm'} onSubmit={send}><label>Add cat:<input type="text" name={'catsInput'}/></label>
                        <button>Save</button>
                    </form>
                </div>
                <div>
                    <form><label>Add dog:<input type="text" name={'addDogs'}/></label>
                        <button>Save</button>
                    </form>

                </div>
            </div>
            <hr/>
            <div className={'animals'}>
                {state.cats && (<div className={'cats'}>{state.cats.map(value=><div>{value}</div>)}</div>)}
                {state.dogs && (<div className={'dogs'}>{state.dogs}</div>)}
            </div>
        </div>
    );
}

export default App;
