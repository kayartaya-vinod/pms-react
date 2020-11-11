import React from 'react';
import { connect } from 'react-redux';
import { deletePerson } from '../actions/person-actions';

const PersonAsTableRow = ({ person, deletePerson }) => (
    <tr>
        <td>
            <img src={person.picture} alt={person.firstname}
                style={{ height: '75px' }}
                className="img img-thumbnail" />
        </td>
        <td>
            <button
                onClick={() => deletePerson(person.id)}
                className="btn btn-link text-danger">&times;</button>
            {person.gender === 'Male' ? 'Mr.' : 'Ms.'} {person.firstname} {person.lastname}
        </td>
        <td>{person.email}</td>
        <td>{person.city}</td>
    </tr>
);

export default connect(null, { deletePerson })(PersonAsTableRow);