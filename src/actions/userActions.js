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
          "Content-Type":"application/json",
          // "Accept": "application/json"
          Authorization:`Bearer ${localStorage.getItem('user')}`
          },  
          body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(user => {
          // debugger
          if (user.error) {
            alert("Email taken"); /*displays error message*/
          } else {
            localStorage.setItem('user', user.jwt);
            console.log(user, "submitting user")
            dispatch({ type: 'ADD_USERS', payload: user })
            window.location.href="your-hairx"
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
        console.log(user);        
        if (user.error) {
          alert("Email or password invalid"); /*displays error message*/
        } else {
          localStorage.setItem('user', user.jwt);
          console.log(user, "submitting user")
          dispatch({ type: 'ADD_USERS', payload: user })
          window.location.href="your-hairx"
        }
       
        console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
  } 
} 


export const logoutUser = () => {
  return (dispatch) => {
    // Remove token from local storage
    localStorage.removeItem('jwt');
    console.log("logging out user")
    // Dispatch an action to reset user state or perform any necessary cleanup
    dispatch({type: 'LOGOUT_USER'});
    window.location.href="your-hairx"
  };
};
