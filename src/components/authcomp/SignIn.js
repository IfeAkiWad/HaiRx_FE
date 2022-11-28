import React, {useState} from 'react'

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <form id="sign-in" onSubmit={handleSubmit}>
                <label id='label-margin'>
                    Username:&nbsp;
                </label>&nbsp;
                <input type='text' onChange={handleUsername} value={username}/>&nbsp;
                <br /><br />
                <label>
                    Password: &nbsp;
                </label>&nbsp;
                <input type='text' onChange={handlePassword} value={password}/>&nbsp;
                <br /><br />
                <input id='button' type='submit' value='Sign In'/>
            </form>
        </div>
    )
}

export default SignIn