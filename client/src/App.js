import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';
import EncantoNav from './components/Navbar';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Product from './pages/Product'
import Categories from './pages/Categories'
import CategoryMenu from './components/CategoryMenu';
import ProductItem from './components/ProductItem';
import  QuantityPicker  from './components/QuantityPicker'
import Banner from './components/Banner';

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
            <AllProducts />
           <Banner />
        </div>
        </Router>
        </StoreProvider>
        {/* <Navbar /> */}
        {/* <Routes> */}
          
      
      {/* <Navbar /> */}
      {/* <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          {/* <Header /> 
          <div className="container">

            <h1>Hello World! Here I come!</h1>
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route
                path="/cart/"
                element={<Cart />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router> */}
      {/* </Routes> */}
    {/* </Router> */}
    
    <Footer />
    </ApolloProvider>
  );
}

export default App;
