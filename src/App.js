import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from './actions/productActions'
import { fetchUsers } from './actions/userActions'
import { fetchSubscriptions } from './actions/subscriptionActions'


import NavBar from './components/navcomp/NavBar';
import ProductContainer from './containers/productContainer'
import ProductProfile from './components/prodcomp/ProductProfile';
import Home from './components/Home';
import UserLanding from './components/usercomp/UserLanding';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
class App extends Component {
  componentDidMount() {
    console.log('Component Did Mount')
    this.props.fetchProducts()
    console.log('Product Did Mount')
    this.props.fetchSubscriptions()
    console.log('Subscription Did Mount')
    this.props.fetchUsers()
    console.log('Users Did Mount')
  }

  render () {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/products" element={<ProductContainer />}/>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/your-hairx" element={<UserLanding />}/>
            <Route exact path="/products/:id" element={<ProductProfile />}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchProducts, fetchSubscriptions, fetchUsers })(App);
