// define a reducer, which is just a function that receives the
// current state from the store, along with the action dispacthed by the UI

// typical action looks like the following object:
// { type: 'ADD_NEW_PERSON', data: {//new person data here}}
// { type: 'FETCH_PERSONS', data: [//list of persons here]}
// { type: 'DELETE_PERSON', data: ID-OF-THE-PERSON-TO-DELETE}

// the return value from this function is the modified state, to be kept back
// in the redux store
export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_NEW_PERSON':
            return [...state, action.data];
        case 'FETCH_PERSONS':
            return [...action.data]
        case 'DELETE_PERSON':
            let list = [...state];
            let index = list.findIndex(p => p.id === action.data)
            if (index !== -1) {
                list.splice(index, 1);
            }
            return [...list];
        default:
            return state;
    }
}