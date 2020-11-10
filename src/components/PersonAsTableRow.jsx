import React from 'react';

const PersonAsTableRow = ({person}) => (
    <tr>
        <td>
            <img src={person.picture} alt={person.firstname} 
                style={{height: '75px'}}
                className="img img-thumbnail"/>
        </td>
        <td>{person.gender==='Male'?'Mr.':'Ms.'} {person.firstname} {person.lastname}</td>
        <td>{person.email}</td>
        <td>{person.city}</td>
    </tr>
);

export default PersonAsTableRow;