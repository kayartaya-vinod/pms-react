import React, { useState } from 'react';

const ProductForm = () => {
    let [state, setState] = useState({
        name: '',
        unitPrice: 0.0,
        category: '',
        unitsInStock: 0
    });

    let [errors, setErrors] = useState({
        name: '',
        unitPrice: '',
        category: '',
        unitsInStock: ''
    });

    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log('state is', state);
    };

    const checkFormValidity = ()=>{
        let {name, unitPrice, unitsInStock, category} = state;
        let errors = {
            name: '',
            unitPrice: '',
            category: '',
            unitsInStock: ''
        };
        // name validation
        if(!name || name.length==0 || name.length>20) {
            errors = {...errors, name: 'Name cannot be empty or larger than 20 letters'}
        }

        // unitPrice validation
        if(unitPrice<0) {
            errors = {...errors, unitPrice: 'Unit price cannot be negative'};
        }
        
        setErrors(errors);

    }

    const changeHandler = ({ target }) => {
        let { name, value } = target;
        setState({...state, [name]: value});
        checkFormValidity();
    };

    return <>
        <div className="row">
            <div className="col-3"></div>
            <div className="col">
                <h3>Add new product details</h3>

                <form onSubmit={submitHandler}>
                    <div className="formgroup row">
                        <label htmlFor="name" className="col-md-4">Name</label>
                        <div className="col-md-8">
                            <input type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={state.name}
                                onChange={changeHandler} />
                            <div className="text-danger">{errors.name}</div>
                        </div>
                    </div>

                    <div className="formgroup row">
                        <label htmlFor="unitPrice" className="col-md-4">Unit price</label>
                        <div className="col-md-8">
                            <input type="number"
                                className="form-control"
                                id="unitPrice"
                                name="unitPrice"
                                value={state.unitPrice}
                                onChange={changeHandler} />
                            <div className="text-danger">{errors.unitPrice}</div>
                        </div>
                    </div>

                    <div className="formgroup row">
                        <label htmlFor="category" className="col-md-4">Category</label>
                        <div className="col-md-8">
                            <input type="text"
                                className="form-control"
                                id="category"
                                name="category"
                                value={state.category}
                                onChange={changeHandler} />
                        </div>
                    </div>

                    <div className="formgroup row">
                        <label htmlFor="unitsInStock" className="col-md-4">Units in stock</label>
                        <div className="col-md-8">
                            <input type="number"
                                className="form-control"
                                id="unitsInStock"
                                name="unitsInStock"
                                value={state.unitsInStock}
                                onChange={changeHandler} />
                        </div>
                    </div>

                    <div className="formgroup row">
                        <label htmlFor="btnSubmit" className="col-md-4"></label>
                        <div className="col-md-8">
                            <button className="btn btn-primary" id="btnSubmit">Submit</button>
                        </div>
                    </div>
                </form>

            </div>
            <div className="col-3"></div>
        </div>
    </>;
};

export default ProductForm;