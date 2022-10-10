import './App.css';

import { connect } from 'react-redux'
import { fetchProducts } from './actions/productActions'
import { fetchUsers } from './actions/userActions'
import { fetchSubscriptions } from './actions/subscriptionActions'

import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetchProducts()
    fetchSubscriptions()
    fetchUsers()
  })

  return (
    <div className="App">
      hey
    </div>
  );
}

export default connect(null, { fetchProducts, fetchSubscriptions, fetchUsers })(App);
