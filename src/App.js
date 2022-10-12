import './App.css';

import { connect } from 'react-redux'
import { fetchProducts } from './actions/productActions'
import { fetchUsers } from './actions/userActions'
import { fetchSubscriptions } from './actions/subscriptionActions'

import { useEffect } from "react";

import NavBar from './components/navcomp/NavBar';
import productContainer from './containers/productContainer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    fetchProducts()
    fetchSubscriptions()
    fetchUsers()
  })

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" component={productContainer}/>
        </Routes>
      </Router>
    </div>
  );
}

export default connect(null, { fetchProducts, fetchSubscriptions, fetchUsers })(App);
