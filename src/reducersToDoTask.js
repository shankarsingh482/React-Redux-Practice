const inital_state =
    {
        text:'',
        items:[]
    }

const reducer = function(state=inital_state,action)
{

    const newState = {...state}
    
    switch(action.type)
    {
        case "ADD_ITEMS":newState.text = action.payload
            break;
        case "ADD_ITEMS_TO_ARRAY":newState.items.push(newState.text)
            newState.text=''
            console.log(newState)
            break;
        case "DELETE_ITEMS" :
            const val = Object.assign([],newState.items);
            val.splice(action.payload,1);
            newState.items= val;
            break;
        default:
            return newState

    }
    return newState
}

export default reducer;