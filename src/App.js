import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Products from './components/Products';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import DetailsPage from './components/DetailsPage';
import NotFound from './components/NotFound';
import Programmer from './components/Programmer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/" element={<Landing />} />
          {/* <Route path="/products/us" element={<AboutUs />} /> */}
          <Route path="/about us/*" element={<AboutUs />}>
            <Route path="programmers" element={<Programmer />} />
            <Route path="drivers" element={<h1>Drivers</h1>} />
          </Route>
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;
