import React from 'react';
import './App.css';
import Store from './components/Store';

//Context
import ProductContextProvider from './context/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
};

export default App;
