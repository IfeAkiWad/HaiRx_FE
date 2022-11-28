import React, {useState} from 'react'

const SignIn = () => {
    const [signIn, setSignIn] = useState('')

    const handleOnChange = (event) => {
        setSignIn(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <form id="sign-in" onSubmit={handleSubmit}>
                <label>
                    Username
                </label>
                <input type='text' onChange={handleOnChange} value={signIn}/>
                <input type='submit' value='Sign In'/>
            </form>
        </div>
    )
}

export default SignIn