import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import manageReducers from './reducers/manageReducers'

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(thunk)
  const composedEnhancers = composeWithDevTools(middlewareEnhancer)
  const store = createStore(manageReducers, preloadedState, composedEnhancers)

  return store
}