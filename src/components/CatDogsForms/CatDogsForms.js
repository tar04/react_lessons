import React from 'react';

const CatDogsForms = ({dispatch}) => {

    const sendCats = (e) => {
        e.preventDefault();
        if (!!e.target.catsInput.value) {
            const cat={
                id:new Date().getTime(),
                name:
            }
            dispatch({type: 'addCats', payload: e.target.catsInput.value})
            e.target.catsInput.value = '';
        } else {
            return;
        }
    }
    const sendDogs = (e) => {
        e.preventDefault();
        if (!!e.target.dogsInput.value) {
            dispatch({type: 'addDogs', payload: e.target.dogsInput.value})
            e.target.dogsInput.value = '';
        } else {
            return;
        }
    }

    return (
            <div className={'forms'}>
                <div>
                    <form onSubmit={sendCats}><label>Add cat:
                        <input type="text" name={'catsInput'}/></label>
                        <button>Save</button>
                    </form>
                </div>
                <div>
                    <form onSubmit={sendDogs}><label>Add dog:
                        <input type="text" name={'dogsInput'}/></label>
                        <button>Save</button>
                    </form>
                </div>
            </div>
    );
};

export default CatDogsForms;