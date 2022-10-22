export const fetchUsers = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_USERS'})
      fetch('http://localhost:3000/users')
      .then(response => {
        console.log('fetching users')
        return response.json()
      })
      .then(users => {
        console.log('b')
        dispatch({ type: 'ADD_USERS', payload: users })
        console.log('fetched users')
      })
    }
}
  
export const submitUsers = (user) => {
    return (dispatch) => {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },  
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(user => {
        // debugger
        console.log(user, "submitting user")
        dispatch({ type: 'ADD_USERS', payload: user })
        
    })
    } 
} 