/*
export function addNewPerson(person) {
    // dispatch an action of type ADD_NEW_PERSON with person as 'data'

    // we are returning a function, which is executed by redux, by supplying the 'dispatch' function 
    // as parameter, using which we can dispatch an action
    return function(dispatch) {
        dispatch({
            type: 'ADD_NEW_PERSON',
            data: person
        });
    }
}
*/
export const addNewPerson = (person) => (dispatch) => {
    // this parameter 'dispatch' is given by a middleware called thunk/saga
    dispatch({
        type: 'ADD_NEW_PERSON',
        data: person
    });
};

export const fetchAllPersons = () => (dispatch) => {
    dispatch({
        type: 'FETCH_PERSONS',
        data: [
            {
                "id": "5f9b8c4ecd73be605a1a0b68",
                "firstname": "Shyam",
                "lastname": "Sundar",
                "gender": "Male",
                "email": "shyamsundar@exmaple.com",
                "city": "Bangalore",
                "picture": "http://kvinod.com/profile-pictures/shyam.png"
            },
            {
                "id": "5f9b8c61cd73be605a1a0b69",
                "firstname": "Vinod",
                "lastname": "Kumar Kayartaya",
                "gender": "Male",
                "email": "vinod@vinod.co",
                "city": "Bangalore",
                "picture": "http://kvinod.com/profile-pictures/vinod.jpg"
            },
            {
                "id": "5faa169ac0e9440497306f50",
                "firstname": "Allen",
                "lastname": "Smith",
                "gender": "Male",
                "email": "allensmith@xmpl.com",
                "city": "Chicago",
                "picture": "http://kvinod.com/profile-pictures/default-profile.png"
            }
        ]
    })
};

export const deletePerson = (id) => (dispatch) => {
    dispatch({
        type: 'DELETE_PERSON',
        data: id
    });
};