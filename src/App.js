import {useReducer} from "react";

import './App.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCats':
            return {...state, cats: state.cats.push(document.forms.catsForm.elements.catsInput.value)}
    }

}

function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const send = () => {
        dispatch({type: 'addCats'})
    }

    return (
        <div>
            <div className={'forms'}>
                <div className={'form'}>
                    <form name={'catsForm'}><label>Add cat:<input type="text" name={'catsInput'}/></label>
                        <button>Save</button>
                    </form>
                </div>
                <div className={'form'}>
                    <form><label>Add dog:<input type="text" name={'addDogs'}/></label>
                        <button>Save</button>
                    </form>

                </div>
            </div>
            <hr/>
            <div className={'animals'}>
                {state.cats && (<div className={'cats'}>{state.cats}</div>)}
                {state.dogs && (<div className={'dogs'}>{state.dogs}</div>)}
            </div>
        </div>
    );
}

export default App;
