import React, { Component } from 'react';

class StatefulCounter extends Component {
    state = { num: 0 }

    constructor() {
        super();
        this.increment = this.increment.bind(this);
    }

    increment() {
        // if you modify the state, it is not reflected on the UI until the component is re-rendered
        // this.state.num++;

        // to re execute the render() method, call the setState (inherited from Component)
        this.setState({ num: this.state.num + 1 }, 
            ()=>console.log('state changed and num is ', this.state.num)); // trigger render() lifecycle method
        console.log('incrementing the value of state.num to', this.state.num);
    }

    decrement = () => {
        this.setState({ num: this.state.num - 1 });
    }



    render() {
        console.log('render() function called.')
        return <>
            <h3>Stateful component demo</h3>
            <h4>Value of state.num is {this.state.num}</h4>
            <button className="btn btn-primary" onClick={this.increment} >Increment</button>
            <button className="btn btn-primary" onClick={this.decrement} >Decrement</button>
        </>;
    }
}

export default StatefulCounter;