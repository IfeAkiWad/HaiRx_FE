import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import allReducers from './reducers/manageReducers';

export default function configureAppStore(preloadedState) {
    const middlewares = thunkMiddleware
    const middlewareEnhancer = applyMiddleware(middlewares)
  
    const enhancers = middlewareEnhancer
    const composedEnhancers = composeWithDevTools(enhancers)
  
    const store = configureStore(allReducers, composedEnhancers)
  
    return store
  }