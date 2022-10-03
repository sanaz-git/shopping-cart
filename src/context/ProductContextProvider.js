import React, { useState, useEffect, createContext } from 'react';

import { getProducts } from '../services/api';

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <ProductsContext.Provider value={products}>
        {children}
      </ProductsContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
