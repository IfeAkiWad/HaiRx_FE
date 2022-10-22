import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from './actions/productActions'
import { fetchUsers } from './actions/userActions'
import { fetchSubscriptions } from './actions/subscriptionActions'


// import NavBar from './components/navcomp/NavBar';
import ProductContainer from './containers/ProductContainer';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.fetchSubscriptions()
    this.props.fetchUsers()
  }

  render () {
    return (
      <div className="App">
        <ProductContainer />
        {/* <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" component={ProductContainer}/>
          </Routes>
        </Router> */}
      </div>
    );
  }
}

export default connect(null, { fetchProducts, fetchSubscriptions, fetchUsers })(App);
