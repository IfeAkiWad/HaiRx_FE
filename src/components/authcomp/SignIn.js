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
        <div className='forms'>
            <div>
                <form id="sign-in" onSubmit={handleSubmit}>    
                    <input className='input-field' type='text' onChange={handleUsername} value={username} placeholder='Username'/>&nbsp;
                    <br /><br />
                    <input className='input-field' type='text' onChange={handlePassword} value={password} placeholder='Password'/>&nbsp;
                    <br /><br /><br />
                    <input id='button' type='submit' value='Sign In'/>

                </form>
            </div>
        </div>
    )
}

export default SignIn