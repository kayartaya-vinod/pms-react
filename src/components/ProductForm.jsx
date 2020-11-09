import React, { useState } from 'react';

const ProductForm = () => {
    let [name, setName] = useState('Logitech Optical Mouse');
    let [unitPrice, setUnitPrice] = useState(0.0);

    const submitHandler = (evt)=>{
        evt.preventDefault();
        console.log('submitHandler called at', new Date());
    };

    const changeHandler = ({target}) =>{
        let {name, value} = target;
        // console.log('changeHandler called at', new Date());
        // console.log('e.target.value is', e.target.value);
        switch(name) {
            case 'name':
                setName(value);
                break;
            case 'unitPrice':
                setUnitPrice(value);
                break;
            default:
        }
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
                                value={name}
                                onChange={changeHandler} />
                        </div>
                    </div>

                    <div className="formgroup row">
                        <label htmlFor="unitPrice" className="col-md-4">Unit price</label>
                        <div className="col-md-8">
                            <input type="text" 
                                className="form-control" 
                                id="unitPrice"
                                name="unitPrice"
                                value={unitPrice}
                                onChange={changeHandler} />
                        </div>
                    </div>
                </form>

            </div>
            <div className="col-3"></div>
        </div>
    </>;
};

export default ProductForm;