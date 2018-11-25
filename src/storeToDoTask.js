import {createStore} from 'redux';
import reducer from './reducersToDoTask'

const store = createStore(reducer)

export default store;