const userReducer = (state = {users: [], loading: false }, action) => {
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
        default:
          return state;  
    }
}

export default userReducer