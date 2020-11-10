import React from 'react';
import PersonAsTableRow from './PersonAsTableRow';


const PersonList = ({persons=[]}) => {

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

export default PersonList;