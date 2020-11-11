import Axios from 'axios';
import {baseURL} from '../constants';


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
export const addNewPerson = (person) => async (dispatch) => {
    // this parameter 'dispatch' is given by a middleware called thunk/saga
    const resp = await Axios.post(baseURL, person);
    const personFromDb = resp.data;
    dispatch({
        type: 'ADD_NEW_PERSON',
        data: personFromDb
    });
};

export const fetchAllPersons = () => async (dispatch) => {
    const resp = await Axios.get(baseURL);

    dispatch({
        type: 'FETCH_PERSONS',
        data: resp.data
    })
};

export const deletePerson = (id) => async (dispatch) => {
    await Axios.delete(baseURL + id);

    dispatch({
        type: 'DELETE_PERSON',
        data: id
    });
};