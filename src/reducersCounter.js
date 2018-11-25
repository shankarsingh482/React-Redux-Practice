const INITIAL_STORE = {counter:0}

const reducer = function (state=INITIAL_STORE,action) {
    const newState = {...state}
    switch (action.type) {
        case 'INCREMENT':
            newState.counter = newState.counter+1;
            break;
        case 'DECREMENT':
            newState.counter = newState.counter-1;
        break;
        default:   return newState
    }
    return newState

}
export default reducer;