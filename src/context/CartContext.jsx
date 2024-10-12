import { createContext,  useReducer } from "react";

const CartContext = createContext();

const changeCart = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };

    case "ADD":
      const isHave = state.cart.some(
        (data) => data.id === action.payload.item.id
      );

      if (!isHave) {
        const productToAdd = { ...action.payload.item, amount: 1 };
        const finalArray = [...state.cart, productToAdd];

        localStorage.setItem("cartForEcom", JSON.stringify(finalArray));
        return {
          ...state,
          cart: finalArray,
        };
      }
      return state;

    case "UPDATE":
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount + action.payload.num }
          : item
      );
      localStorage.setItem("cartForEcom", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };

    case "REMOVE":
      const removedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem("cartForEcom", JSON.stringify(removedCart));
      return {
        ...state,
        cart: removedCart,
      };

    default:
      return state;
  }
};

export default function CartContextProvider({ children }) {
  const data = localStorage.getItem("cartForEcom");

  const initialState = {
    cart: data ? JSON.parse(data) : [], // Initialize cart from local storage
  };

  const [state, dispatch] = useReducer(changeCart, initialState);

  const addToCart = (item) => {
    dispatch({
      type: "ADD",
      payload: {
        item,
      },
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE",
      payload: {
        id,
      },
    });
  };

  const updateCart = (id, num) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        num,
      },
    });
  };

  const ctxValue = {
    cart: state.cart,
    addToCart,
    removeFromCart,
    updateCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
