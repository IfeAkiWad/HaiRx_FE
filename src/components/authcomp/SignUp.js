import React, {useState} from 'react'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleName = (event) => {
        setName(event.target.value)
    }
    
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
       <div className='forms'>
             <div>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <input type='text' onChange={handleName} value={name} placeholder='Name' />&nbsp;
                        </li>
                        <br /><br />
                        <li>
                            <input type='text' onChange={handleEmail} value={email} placeholder='Email'/>&nbsp;
                        </li>
                        <br /><br />
                        <li>
                            <input type='text' onChange={handleUsername} value={username} placeholder='Username'/>&nbsp;
                        </li>
                        <br /><br />
                        <li>
                            <input type='text' onChange={handlePassword} value={password} placeholder='Password'/>&nbsp;
                        </li>
                        <br /><br /><br />
                        <li>
                            <input id='button' type='submit' value='Create Account'/>
                        </li>
                    </ul>
                </form>
            </div>
       </div>
    )
}

export default SignUp