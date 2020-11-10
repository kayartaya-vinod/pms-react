// import { useState } from 'react';
import ReactDOM from 'react-dom';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';

import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


const App = () => {
  return <Provider store={store}>
    <div className="container">
      <h1>Redux Demo Application</h1>
      <hr />
      <div className="row">
        <div className="col-md-5">
          <PersonForm />
        </div>
        <div className="col-md-7">
          <PersonList />
        </div>
      </div>
    </div>
  </Provider>
}

ReactDOM.render(<App />, document.getElementById('root'));

// import { Component } from 'react';
// import StatefulCounter from './components/StatefulCounter';
// import Header from './components/Header';
// import StatelessCounter from './components/StatelessCounter';
// import ProductForm from './components/ProductFormV2';

// const data = {
//   title: 'PMS v1.1',
//   developer: 'Kayartaya Vinod'
// };

// class App extends Component {

//   render() {
//     return <>
//       <Header {...data} />
//       <div className="container">
//         <StatefulCounter />
//         <hr/>
//         <StatelessCounter />
//         <hr/>
//         <ProductForm />
//       </div>
//     </>;
//   }
// }