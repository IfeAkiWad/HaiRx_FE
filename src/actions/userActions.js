export const fetchUsers = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_USERS'})
      console.log('a')
  
      fetch('http://localhost:3000/api/v1/users')
      .then(response => {
        return response.json()
      })
      .then(users => {
        console.log('b')
        dispatch({ type: 'ADD_USERS', payload: users })
      })
    }
  }
  
  export const submitUsers = (user) => {
      return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users', {
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