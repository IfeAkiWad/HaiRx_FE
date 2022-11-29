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
                    <ul>
                        <li>    
                            <input type='text' onChange={handleUsername} value={username} placeholder='Username'/>&nbsp;
                        </li>
                        <br /><br />
                        <li>
                            <input type='text' onChange={handlePassword} value={password} placeholder='Password'/>&nbsp;
                        </li>
                        <br /><br /><br />
                        <li>
                            <input id='button' type='submit' value='Sign In'/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default SignIn