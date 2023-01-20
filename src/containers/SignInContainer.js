import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignIn from '../components/authcomp/SignIn'

export class SignInContainer extends Component {
  render() {
    console.log('returnUsers', this.props.returnUsers)
    const users = this.props.returnUsers
    const user = users.map(u => {
            return u.email
        })
    
    return (
      <div>
            <SignIn  user={user} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        returnUsers: state.userReducer.users,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(SignInContainer)