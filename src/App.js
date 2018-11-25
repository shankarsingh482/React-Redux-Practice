import React, { Component } from 'react';
import './App.css';
//import Counter from './Components/Counter'
import {Provider} from 'react-redux'
import store from './storeToDoTask'
import TodoTask from './Components/TodoTask'

class App extends Component {
  render() {
    return (
              <div className='App'>

                  <Provider store={store}><TodoTask/></Provider>
              </div>

    );
  }
}

export default App;
/*
<Provider storeCounter = {storeCounter}><Counter/></Provider>
 <Provider storeCounter={storeCounter}><Calculator/></Provider>
 */