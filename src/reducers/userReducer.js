const initialState = {
    isLoggedIn: false, // Indicates if the user is logged in
    // other user-related state properties...
  };

const userReducer = (state = { users: [], loading: false, ...initialState }, action) => {
    switch (action.type) {
        case 'LOADING_USERS':
            return {
                ...state,
                users: [...state.users, action.payload],
                loading: true
            }   
        case 'ADD_USERS':
            console.log('ADDING USERS')
            return {
                ...state,
                users: action.payload,
                loading: false
            }
            case 'LOGOUT_USER':
            console.log('LOGGING OUT USER')
            return {
                ...state,
                isLoggedIn: false
                // users: action.payload,
                // loading: false
            }    
        default:
          return state;  
    }
}

export default userReducer