import React ,{Component} from 'react';
import {connect} from 'react-redux'
import storeCounter from "../storeCounter";

class  Counter extends React.Component {

    constructor(props)
    {
        super(props);
    }
    Increment()
{
    this.props.Increase();
}
Decrement()
{
this.props.Decrease();
}
    render()
    {   return(


        <div>

            <button onClick={this.Increment.bind(this)}>Increment</button>
            <h2>{this.props.counter}</h2>
            <button onClick={this.Decrement.bind(this)}>Decrement</button>

        </div>
    )
    }


}


const mapStateToProps = function (state) {
    return {
        counter: state.counter
    }

}
const mapDispatchToProps= function (dispatch) {
 return {
     Increase:function () {
         return dispatch({type:'INCREMENT'})
     },
     Decrease:function () {
         const val= storeCounter.getState()
         console.log(val);
         if(val.counter>0)
         {
             return  dispatch({type:'DECREMENT'})
         }

     }

 }

}


export default  connect(mapStateToProps,mapDispatchToProps)(Counter)

