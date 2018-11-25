import {createStore} from 'redux';

import reducers from './reducersCalculator'

const store = createStore(reducers)

export default store;