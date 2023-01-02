import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignIn from '../components/authcomp/SignIn'

export class SignInContainer extends Component {
  render() {
    return (
      <div>
            <SignIn />
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