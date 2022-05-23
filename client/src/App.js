import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';
import EncantoNav from './components/Navbar';
import Cart from './pages/Cart';
import Categories from './pages/Categories'
import ProductItem from './components/ProductItem';
import Home from './pages/Home';
import DummyFooter from './components/DummyFooter';
import Success from './pages/Success/index.js';
import OrderHistory from './pages/OrderHistory';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';

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
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/userprofile"
                element={<UserProfile />}
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
                path="/product/:productId"
                element={<ProductItem />}
              />
              <Route
                path="/orderhistory"
                element={<OrderHistory />}
              />
            </Routes>
            {/* <ProductItem item={item} /> */}

          </div>
          <DummyFooter />
        </Router>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
