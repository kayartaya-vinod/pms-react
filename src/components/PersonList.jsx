import React, { useEffect } from 'react';
import PersonAsTableRow from './PersonAsTableRow';
import { connect } from 'react-redux'; // connect is a function that returns a HOC
import { fetchAllPersons } from '../actions/person-actions';

// we want redux to supply the state 'persons' as props
const PersonList = ({ persons, getAll }) => {

    // we calling getAll() instructs redux to call the fetchAllPerson() function,
    // which affects the store, and the store-updates will update the UI

    // equivalent of componentDidMount lifecycle method in stateful components
    useEffect(() => {
        getAll();
    }, []);

    return <>
        <h3>List of all persons</h3>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email address</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map(p => <PersonAsTableRow person={p} key={p.id} />)
                }
            </tbody>
        </table>
    </>;
}

// a hoc (higher-order-component) is a function that takes a component as a parameter, and
// returns same/different/modified component as a return value.

// connect() takes 2 arguments:
// 1. what state do you want as props from store?
// 2. what action methods do you want as props?

const stateAsProps = (store) => {
    return {
        persons: store.persons
    }
};

const actionsAsProps = {
    getAll: fetchAllPersons
}

const hoc = connect(stateAsProps, actionsAsProps);
export default hoc(PersonList);
// exported component is a modified version of PersonList (and not PersonList itself)