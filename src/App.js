import './App.css';

import { connect } from 'react-redux'
import { fetchProducts } from './actions/productActions'
import { fetchUsers } from './actions/userActions'
import { fetchSubscriptions } from './actions/subscriptionActions'

import { useEffect } from "react";

import NavBar from './components/navcomp/NavBar';
import UserSignInContainer from './containers/UserSignInContainer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    fetchProducts()
    fetchSubscriptions()
    fetchUsers()
  })

  return (
    <div className="App">
      hey
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={UserSignInContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default connect(null, { fetchProducts, fetchSubscriptions, fetchUsers })(App);
