import React, { createContext, useState } from 'react';

const cartContext = createContext();

export default function ProductContext({ children }) {
  const [cartProduct, setCartProduct] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <cartContext.Provider value={{cartProduct, setCartProduct }}>
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
