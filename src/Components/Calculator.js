import React ,{Component} from 'react';
import {connect} from'react-redux';


class Calculator extends React.Component
{
    constructor(props)
    {
        super(props)
    }



    render()
    {
        return(
            <div>
                Number1<input  placeholder='enter the number 1' type='text' name='number1'onChange={this.props.change} />
                Number2<input placeholder='enter the number 2' type='text' name='number2'onChange={this.props.change} />
                <button name='add' onClick={this.props.Calculate} > Add</button>
                <button name='sub' onClick={this.props.Calculate} > Subtract</button>
                <button  name='mult' onClick={this.props.Calculate}> Multiply</button>
                <button  name='div' onClick={this.props.Calculate} > Divide</button>
                <br/>
                <p>Result is :{this.props.result}</p>
            </div>

        )



    }

}

const mapStateToProps = function(state)
{

    return {
        number1:state.number1,
        number2:state.number2,
        result:state.result
    }
}
const mapDispatchToProps = function (dispatch) {
    return {
        change: function (e) {
            return dispatch({type: 'CHANGE', val: e.target.value, name: e.target.name})

        },


        Calculate: function (e) {
            return dispatch({type: 'CALCULATE', name: e.target.name})
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Calculator);