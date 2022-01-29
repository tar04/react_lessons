export default function reducer(state, action) {
    switch (action.type) {
        case 'addCats': {
            return {...state, cats: [...state.cats, action.payload]};
        }
        case 'addDogs': {
            return {...state, dogs: [...state.dogs, action.payload]};
        }
        case 'deteleCat': {
            return {...state, cats: [state.cats.filter(cat=>cat.id!==action.payload)]};
        }
    }
}