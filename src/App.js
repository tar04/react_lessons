import {useReducer} from "react";

import './App.css';

const reducer = (state, action) => {
   /* switch (action.type) {
        case 'addCats':
            return {...state, cats: state.cats.push(document.forms.catsInput.value)}
    }*/

}

function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0});

    return (
        <div>
            <div className={'forms'}>
                <div className={'form'}>
                    <form><label>Add cat:<input type="text" name={'catsInput'}/></label>
                        <button onClick={dispatch({type: 'addCats'})}>Save</button>
                    </form>
                </div>
                <div className={'form'}>
                    <form><label>Add dog:<input type="text" name={'addDogs'}/></label>
                        <button onClick={dispatch({type: 'addDogs'})}>Save</button>
                    </form>

                </div>
            </div>
            <hr/>
            <div className={'animals'}>
               <div className={'cats'}>{state.count1}</div>
                <div className={'dogs'}>{state.count2}</div>
            </div>
        </div>
    );
}

export default App;
