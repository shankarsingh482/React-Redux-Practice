import React ,{Component} from 'react'
import  {connect} from 'react-redux';
class TodoTask extends React.Component
{
    constructor(props)
    {
        super(props);

    }
    render()
    {
        return (
            <main>
                <input type='text' name='todo' onChange={this.props.change} value={this.props.text}/>
                <input type='submit' value='Add Task'onClick={this.props.submit_task} />
                <ul>
                    {this.props.items.map((show,index)=>{

                        return(<li key={index}>{show}
                        <button onClick={this.props.delete_task.bind(this,index)}>Delete</button>

                            </li>

                        )

                    })}

                </ul>
            </main>

        )
    }

}

const mapStateToProps=function (state) {
    return{
            text:state.text,
            items:state.items
    }

}

const mapDispatchToProps = function (dispatch) {

    return{
        change:function (e) {
            console.log(e.target.value)
            return dispatch({type:'ADD_ITEMS',payload:e.target.value})
        },
        submit_task:function(e)
        {
            return dispatch({type:'ADD_ITEMS_TO_ARRAY'})
        },
        delete_task:function(index)
        {
            return dispatch({type:'DELETE_ITEMS',payload: index})
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoTask)
