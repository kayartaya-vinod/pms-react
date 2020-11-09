import React, { useState } from 'react';

const StatelessCounter = () => {
    // the keyword 'this' is not allowed inside a stateless component

    // calling useState() returns an array of two elements, one is value, 
    // and another is a setter function for that value
    const [num, setNum] = useState(0);

    let increment = () => {
        // num++;
        setNum(num+1); // the component is re-rendered
        // setNum is asynchronously executed, after the current stack is over
        console.log('num is incremented to', num+1);
    };

    let decrement = () => {
        setNum(num-1); // component is re-rendered
        console.log('num is decremented to', num-1);
    };

    return <>
        <h3>Stateless component demo</h3>
        <h4>Value of num is {num}</h4>
        <button className="btn btn-primary" onClick={increment} >Increment</button>
        <button className="btn btn-primary" onClick={decrement} >Decrement</button>

    </>;
};

export default StatelessCounter;