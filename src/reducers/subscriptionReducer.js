const subscriptionReducer = (state = {subscriptions: []}, action) => {
    switch (action.type) {
        case 'LOADING_SUBSCRIPTIONS':
            return {
                ...state,
                subscriptions: [...state.subscriptions, action.payload],
                loading: true
            }   
        case 'ADD_SUBSCRIPTIONS':
            return {
                ...state,
                subscriptions: action.payload,
                loading: false
            }  
        case 'REMOVE_SUBSCRIPTIONS':
            let deleteSubscriptions = state.subscriptions.filter(sub => sub.id === action.payload.id)
            return {
                ...state,
                subscriptions: deleteSubscriptions
            }  
        default:
          return state;  
    }
}

export default subscriptionReducer