import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitUsers } from '../../actions/userActions'

class SignUp extends Component {

    constructor() {
        super() //helps constructor execure what itinherited from React.component
        this.state = {
           email: '',
           password: ''
        }

    }

    handleChange = (event) => {
        console.log('typing in form')
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        console.log('form submit')
        event.preventDefault();
        this.props.submitUsers(this.state); //using action dispatch function as a prop (mapDispatchToProps)
        // alert("Successfully signed in");
        // this.props.history.push('/toddlers'); //redirecting to toddlers index

    }

    render () {
        return (
            <div className='forms'>
                <div>
                    <form id="sign-up" onSubmit={this.handleSubmit}>    
                        <input className='input-field' name='email' type='text' onChange={this.handleChange} value={this.state.email} placeholder='Email'/>&nbsp;
                        <br /><br />
                        <input className='input-field' name='password' type='text' onChange={this.handleChange} value={this.state.password} placeholder='Password'/>&nbsp;
                        <br /><br /><br />
                        <input id='button' type='submit' value='Sign Up'/>
    
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { submitUsers })(SignUp)