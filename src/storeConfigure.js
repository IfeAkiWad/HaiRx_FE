import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import manageReducers from './reducers/manageReducers'

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(thunkMiddleware)
  const composedEnhancers = composeWithDevTools(middlewareEnhancer)
  const store = createStore(manageReducers, preloadedState, composedEnhancers)

  return store
}