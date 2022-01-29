export default function reducer(state, action) {
    switch (action.type) {
        case 'addCats': {
            return {...state, cats: [...state.cats, action.payload]};
        }
        case 'addDogs': {
            return {...state, dogs: [...state.dogs, action.payload]};
        }
        case 'deleteCat': {
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};
        }
        case 'deleteDog': {
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)};
        }
        default : {
            return state;
        }
    }
}