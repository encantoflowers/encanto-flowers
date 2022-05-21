import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';
import EncantoNav from './components/Navbar';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';
import Product from './pages/Product'
import Categories from './pages/Categories'
import CategoryMenu from './components/CategoryMenu';
import ProductItem from './components/ProductItem';
import QuantityPicker from './components/QuantityPicker'
import Banner from './components/Banner';
import FinePrint from './components/FinePrint';
import AllProducts from './components/Products';

import Hero from './components/Hero'
import Home from './pages/Home';
import ShopNowBanner from './components/ShopNowBanner';
import Featured from './components/Featured';
import Seasonal from './components/Seasonal';
import DummyFooter from './components/DummyFooter';
import Success from './pages/Success';
import OrderHistory from './components/OrderHistory';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {

  
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Router>
          <div>
            <EncantoNav />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/categories/:category"
                element={<Categories />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
              <Route
                path="/success"
                element={<Success />}
              />
              <Route
                path="/product"
                element={<ProductItem />}
              />
            </Routes>
            {/* <ProductItem item={item} /> */}

          </div>
        </Router>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
