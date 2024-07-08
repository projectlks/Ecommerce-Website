import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const changeCart = (state, action) => {
  switch (action.type) {
    case "ADD":
      let isHave = state.cart.some(
        (data) => data.id === action.payload.item.id
      );

      if (!isHave) {
        let productToAdd = { ...action.payload.item, amount: 1 };
        return {
          ...state,
          cart: [...state.cart, productToAdd]
        };
      }
      return state;

    case "UPDATE":
      let updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount + action.payload.num }
          : item
      );
      return {
        ...state,
        cart: [...updatedCart]
      };

    case "REMOVE":
      let removedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: [...removedCart]
      };

    default:
      return state;
  }
};

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeCart, {
    cart: []
  });

  const addToCart = (item) => {
    dispatch({
      type: "ADD",
      payload: {
        item
      }
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE",
      payload: {
        id
      }
    });
  };

  const updateCart = (id, num) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        num
      }
    });
  };

  const ctxValue = {
    cart: state.cart,
    addToCart,
    removeFromCart,
    updateCart
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
