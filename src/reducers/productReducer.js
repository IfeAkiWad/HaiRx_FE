const productReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case 'LOADING_PRODUCTS':
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: true
            }   
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                loading: false
            }  
        default:
          return state;  
    }

}

export default productReducer