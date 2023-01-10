export const fetchUsers = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_USERS'})
      fetch('http://localhost:3000/api/v1/users')
      .then(response => {
        console.log('fetching users')
        return response.json()
      })
      .then(users => {
        console.log('dispatch users')
        dispatch({ type: 'ADD_USERS', payload: users })
        console.log('fetched users')
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
          // Authorization: `Bearer ${localStorage.getItem('user')}`
          },  
          body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(user => {
          // debugger
          if (user.error) {
            alert("Username or email taken"); /*displays error message*/
          } else {
            localStorage.setItem('user', user.jwt);
            console.log(user, "submitting user")
            dispatch({ type: 'ADD_USERS', payload: user })
          }  
      })
      .catch((err) => {
        console.log(err);
      });
    } 
} 

export const loginUsers = (user) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        // "Accept": "application/json"
        Authorization: `Bearer ${localStorage.getItem('user')}`
        },  
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(user => {
        // debugger
        if (user.error) {
          alert("Username or email invalid"); /*displays error message*/
        } else {
          localStorage.setItem('user', user.jwt);
          console.log(user, "submitting user")
          dispatch({ type: 'ADD_USERS', payload: user })
        }  
    })
    .catch((err) => {
      console.log(err);
    });
  } 
} 

