import React, { useReducer, createContext } from 'react';

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
      };

    case 'REMOVE_ITEM':
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id,
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
      };

    case 'INCREASE':
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
      };
    case 'DECREASE':
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
      };

    case 'CHECKOUT':
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    case 'CLEAR':
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

export const CartContext = createContext();

const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <CartContext.Provider value={{ state: state, dispatch: dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CardContextProvider;
