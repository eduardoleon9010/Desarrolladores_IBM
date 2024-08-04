import React, { useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (id, value) => {
    if (cart[id]) return;

    setCart((prev) => ({ ...prev, [id]: { ...value, amount: 1 } }));
  };

  const removeFromCart = (id) => {
    const temp = { ...cart };
    delete temp[id];

    setCart(temp);
  };

  const incrementCount = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: { ...prev[id], amount: prev[id].amount + 1 },
    }));
  };

  const decrementCount = (id) => {
    setCart((prev) => {
      if (prev[id].amount === 1) {
        removeFromCart(id);
        return;
      }
      return { ...prev, [id]: { ...prev[id], amount: prev[id].amount - 1 } };
    });
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementCount,
        decrementCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
