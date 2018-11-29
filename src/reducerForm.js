const initial_state = 
{
    name:'',
    phone:'',
    sex:'',
    error:''
}

const reducer = function(state=initial_state,action)
{  const newState = {...state}
    switch(action.type)
    {
      
       case 'SUBMIT': 
      if(action.name==='')
       {
            newState.error='Hey Please  Fill Your Name'
       }
        else if(action.phone==='')
        {
            newState.error='Hey Please  Fill Your Contact Number'
        }

      else{
        newState.name=action.name;
        newState.phone = action.phone;
        newState.sex= action.sex
      }
   
      default:
         return newState  
    }
    return newState
    
}
export default reducer