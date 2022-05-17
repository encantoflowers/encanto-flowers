import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';

// import EncantoNav from './components/Navbar';
import Cart from './pages/Cart';
// import Footer from './components/Footer';
import Product from './pages/Product'
import Categories from './pages/Categories'
import CategoryMenu from './components/CategoryMenu';
import ProductItem from './components/ProductItem';

const httpLink = createHttpLink({
  uri: '/graphql'
})

const client = new ApolloClient({
  uri: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <StoreProvider>
      <Router>
        {/* <Navbar /> */}
        {/* <EncantoNav /> */}
       <h1>Hello world!</h1>
       <ProductItem />
        <Routes>
       
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
      </Routes>
    </Router>
    </StoreProvider>   
      
    </ApolloProvider>
  );
}

export default App;
