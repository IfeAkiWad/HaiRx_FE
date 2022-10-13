import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import allReducers from './reducers/manageReducers'

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(thunk)
  const composedEnhancers = composeWithDevTools(middlewareEnhancer)
  const store = createStore(allReducers, preloadedState, composedEnhancers)

  return store
}