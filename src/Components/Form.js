import React, { Component } from 'react';
import { connect } from 'react-redux'

class Form extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div style={{width:'50%'}} >
                <form> 
                    <fieldset>  
                        <legend>Personal Information</legend>
                    Name <input type='text' name='name' id='name' placeholder='Enter Your Name' ></input>
                    <br />
                    Number <input type='text' name='phone' id='number' placeholder='Enter Your Phone Number'></input>
                    <br />
                    <fieldset>
                        <legend>Gender</legend>
 Male<input id='gen' type='radio' name='gender' value='male' />
                    Female<input id='gen' type='radio' name='gender' value='female' />
                    <br />
                    </fieldset>
                    <fieldset>
    <legend>Courses</legend>
    c++<input type='checkbox' value='c++'/>
    JavaScript<input type='checkbox' value='java script'/>
    HTML<input type='checkbox' value='html'/>
    Node js<input type='checkbox' value='nodejs'/>
</fieldset>
                    <input type='submit' value='Submit Form' onClick={this.props.submit_form}></input>
                    <br />
</fieldset>

                </form>
                <div id='show_data' style={{ display: 'none' }}>
                    <h1>Name is :{this.props.name} gender is :{this.props.sex} Contact Number is :{this.props.phone}</h1>
                </div>
                <div className='error' style={{ color: 'red' }}>
                    {this.props.error}
                </div>

            </div>




        )
    }
}
const mapStateToProps = function (state) {
    return {
        name: state.name,
        phone: state.phone,
        sex: state.sex,
        error: state.error
    }
}
const mapDispatchToProps = function (dispatch) {
    return {
        submit_form: function (e) {
            e.preventDefault();
            if (!(document.getElementById('name').value === '' || document.getElementById('number').value==='' ) ) {
                console.log('hey');
                document.getElementById('show_data').style.display = 'block';
            }
            var gender = document.getElementsByName('gender')
           
            for (var i = 0; i < gender.length; i++) {
                if (gender[i].checked) {
                    var gen = gender[i].value
                    break;
                }
            }
            console.log(gen);

            return dispatch({
                type: 'SUBMIT',

                name: document.getElementById('name').value,
                phone: document.getElementById('number').value,
                sex: gen

            })
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Form)