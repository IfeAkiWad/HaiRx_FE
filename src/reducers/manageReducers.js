import subscriptionReducer from "./subscriptionReducer"
import userReducer from "./userReducer"
import productReducer from "./productReduer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
   subscriptionReducer,
    userReducer,
    productReducer
})

export default allReducers