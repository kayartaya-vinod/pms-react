import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addNewPerson} from '../actions/person-actions';

const PersonForm = ({addPerson}) => {

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        gender: 'Male',
        picture: 'http://kvinod.com/profile-pictures/default-profile.png',
        city: ''
    });

    const submitHandler = (evt) => {
        evt.preventDefault();
        // alert(JSON.stringify(state));
        addPerson(state);
        setState({
            firstname: '',
            lastname: '',
            email: '',
            gender: 'Male',
            picture: 'http://kvinod.com/profile-pictures/default-profile.png',
            city: ''
        });
    };

    const changeHandler = ({target}) => {
        let {name, value} = target;
        setState({...state, [name]: value});
    };

    return <>
        <h3>Add a new person data</h3>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="firstname">Firstname</label>
                <div>
                    <input type="text" 
                        id="firstname" 
                        name="firstname" 
                        value={state.firstname}
                        onChange={changeHandler}
                        className="form-control"/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="lastname">Lastname</label>
                <div>
                    <input type="text" 
                        id="lastname" 
                        name="lastname" 
                        value={state.lastname}
                        onChange={changeHandler}
                        className="form-control"/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="firstname">Gender</label>
                <div>
                    <label>
                    <input type="radio" 
                        id="genderMale" 
                        name="gender" 
                        value="Male"
                        checked={state.gender==='Male'}
                        onChange={changeHandler} /> Male
                    </label>
                    <label>
                    <input type="radio" 
                        id="genderFemale" 
                        name="gender" 
                        value="Female"
                        checked={state.gender==='Female'}
                        onChange={changeHandler} /> Female
                    </label>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <div>
                    <input type="email" 
                        id="email" 
                        name="email" 
                        value={state.email}
                        onChange={changeHandler}
                        className="form-control"/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="city">City</label>
                <div>
                    <input type="text" 
                        id="city" 
                        name="city" 
                        value={state.city}
                        onChange={changeHandler}
                        className="form-control"/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="picture">Picture URL</label>
                <div>
                    <input type="text" 
                        id="picture" 
                        name="picture" 
                        value={state.picture}
                        onChange={changeHandler}
                        className="form-control"/>
                </div>
            </div>

            <button className="btn btn-primary">Submit</button>

        </form>
    </>;
};

export default connect(null, {addPerson: addNewPerson})(PersonForm);