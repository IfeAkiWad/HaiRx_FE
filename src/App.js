import './App.css';

import { connect } from 'react-redux'
import { fetchProducts } from './actions/productActions'
import { fetchUsers } from './actions/userActions'
import { fetchSubscriptions } from './actions/subscriptionActions'

import { useEffect } from "react";

// import NavBar from './components/navcomp/NavBar';
import ProductContainer from './containers/ProductContainer';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    fetchProducts()
    fetchSubscriptions()
    fetchUsers()
  })
  console.log("work dammit")
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

export default connect(null, { fetchProducts, fetchSubscriptions, fetchUsers })(App);
