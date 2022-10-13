import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import allReducers from './reducers/manageReducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

// const middlewareEnhancer = applyMiddleware(thunk)
// const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(allReducers, composedEnhancer(middlewareEnhancer));

// import configureStore from './storeConfigure';
// const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
