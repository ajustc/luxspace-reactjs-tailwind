import React from "react";

const Context = React.createContext();

const initialState = {
  cart: {},
};

export function useGlobalContext() {
  const [state, dispatch] = React.useContext(Context);

  if (!state || !dispatch) {
    throw new Error("useGlobalContext must be used within a Provider");
  }

  return { state, dispatch };
}

function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart
          ? {
              ...state.cart,
              [action.item.id]: action.item,
            }
          : { [action.item.id]: action.item },
      };

    default: {
      throw new Error(`Unhandle action type ${action.type}`);
    }
  }
}

export default function Provider(props) {
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  return <Context.Provider value={[ state, dispatch ]} {...props} />;
}
