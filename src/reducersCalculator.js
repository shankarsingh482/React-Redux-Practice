const initialState = {
    number1: 0,
    number2: 0,
    result: 0
};
const reducers = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "CHANGE":
            action.name === "number1" ? (newState.number1 = action.val)
                : (newState.number2 = action.val);
            break;
        case "CALCULATE":
            if(newState.number1 ===0 || newState.number2===0){
                console.log("bye");
                alert("Please enter both numbers.");
            }
            else{
                switch (action.name) {
                    case 'add':
                        newState.result = Number(newState.number1) + Number(newState.number2);
                        break;
                    case "sub":
                        newState.result = Number(newState.number1) - Number(newState.number2);
                        break;
                    case "mult":
                        newState.result = Number(newState.number1) * Number(newState.number2);
                        break;
                    case "div":
                        newState.result = Number(newState.number1) / Number(newState.number2);
                        break;
                }
            }
        default:
            return newState;
    }
    return newState;
};

export default reducers;