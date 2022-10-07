import subscriptionReducer from "./subscriptionReducer"
import userReducer from "./userReducer"
import productReducer from "./productReducer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
   subscriptionReducer,
    userReducer,
    productReducer
})

export default allReducers