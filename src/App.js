import React, { Component } from 'react';
import './App.css';
//import Counter from './Components/Counter'
import {Provider} from 'react-redux'
//import store from './storeToDoTask'
//import TodoTask from './Components/TodoTask'
import Form from './Components/Form'
import store from './storeForm'
class App extends Component {
  render() {
    return (

              <div className='App'>
                             <Provider store={store}><Form/></Provider>
              </div>

    );
  }
}

export default App;
/*
<Provider storeCounter = {storeCounter}><Counter/></Provider>
 <Provider storeCounter={storeCounter}><Calculator/></Provider>
                   <Provider store={store}><TodoTask/></Provider>
                   <Provider store={store}><Form/></Provider>

 */