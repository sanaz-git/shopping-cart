import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

//Component
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CardContextProvider from './context/CardContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CardContextProvider>
    </ProductContextProvider>
  );
};

export default App;
