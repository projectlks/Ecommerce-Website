import { createContext, ReactNode, useReducer } from "react";

// Define the state interface
interface State {
  wish: Product[];
}

// Define the action type
type Action = { type: "ADD_WISH" | "REMOVE_WISH"; payload: any };

// Reducer function to handle the state changes
const wishReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_WISH":
      const isHave = state.wish.some(
        (data) => data.id === action.payload.item.id
      );
      if (!isHave) {
        const finalArray = [...state.wish, action.payload.item];

        localStorage.setItem("wish", JSON.stringify(finalArray));
        return {
          ...state,
          wish: finalArray,
        };
      }
      return state;

    case "REMOVE_WISH":
      const newArray = state.wish.filter(
        (data) => data.id !== action.payload.id
      );
      localStorage.setItem("wish", JSON.stringify(newArray));

      return {
        ...state,
        wish: newArray,
      };

    default:
      return state;
  }
};

interface WishValue {
  wish: Product[];
  addWish: (item: Product) => void;
  removeWish: (id: number) => void
}

// Create the context with a default value of `undefined`
const wishContext = createContext<WishValue | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const WishContextProvider = ({ children }: Props) => {
  const data = localStorage.getItem("wish");
  const initialState: State = { wish: data ? JSON.parse(data) : [] }; // Initialize the state with an empty wish array

  const [state, dispatch] = useReducer(wishReducer, initialState); // Use the reducer

  const addWish = (item: Product) => {
    dispatch({
      type: "ADD_WISH",
      payload: {
        item,
      },
    });
  };

  const removeWish = (id: number) => {
    dispatch({
      type: "REMOVE_WISH",
      payload: {id},
    });
  };

  const wishValue = {
    wish: state.wish,
    addWish,
    removeWish
  };

  return (
    <wishContext.Provider value={wishValue}>{children}</wishContext.Provider>
  );
};

export { wishContext, WishContextProvider };
