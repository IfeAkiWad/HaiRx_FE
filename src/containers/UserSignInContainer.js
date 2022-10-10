import React from 'react'
import { connect } from 'react-redux'


function UserSignInContainer (props) {
     console.log(props.users)

    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.UserReducer.users,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(UserSignInContainer)