import React, { useState, useEffect, createContext } from 'react';

import { getProducts } from '../services/api';

const ProductContextProvider = (props) => {
  const ProductContext = createContext();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={products}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
