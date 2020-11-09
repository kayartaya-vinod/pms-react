import { Component } from 'react';
import ReactDOM from 'react-dom';
import StatefulCounter from './components/StatefulCounter';
import Header from './components/Header';
import StatelessCounter from './components/StatelessCounter';
import ProductForm from './components/ProductFormV2';

const data = {
  title: 'PMS v1.1',
  developer: 'Kayartaya Vinod'
};

class App extends Component {

  

  render() {
    return <>
      {/* The Header component is instantiated */}
      <Header {...data} />
      <div className="container">
        <StatefulCounter />
        <hr/>
        <StatelessCounter />
        <hr/>
        <ProductForm />
      </div>
    </>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));