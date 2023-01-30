import React, { Component } from 'react'
import { connect } from "react-redux"
import { loginUsers } from "../../actions/userActions"

class SignIn extends Component {

    constructor() {
        super() //helps constructor execute what itinherited from React.component
        this.state = {
           email: '',
           password: ''
        }

    }

    handleChange = (event) => {
        console.log('typing in sign in form')
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        console.log('form submit')
        event.preventDefault();
        this.props.loginUsers(this.state); //using action dispatch function as a prop (mapDispatchToProps)
        // alert("Successfully signed in");
        // window.location.assign("https://localhost:3001/your-hairx")
    }

    render () {
        return (
            <div className='forms'>
                <div>
                    <form id="sign-in" onSubmit={this.handleSubmit}>    
                        <input className='input-field' name='email' type='text' onChange={this.handleChange} value={this.state.email} placeholder='Email'/>&nbsp;
                        <br /><br />
                        <input className='input-field' name='password' type='text' onChange={this.handleChange} value={this.state.password} placeholder='Password'/>&nbsp;
                        <br /><br /><br />
                        <input id='button' type='submit' value='Sign In'/>
    
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { loginUsers })(SignIn)