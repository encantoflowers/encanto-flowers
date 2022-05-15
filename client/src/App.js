import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/';

// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import Header from './components/Header';
// import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
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

    </ApolloProvider>
  );
}

export default App;
