import {createStore } from 'redux';

import reducer from './reducersCounter.js';

const storeCounter =createStore(reducer);

export default storeCounter;