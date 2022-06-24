import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  UPDATE_SELECTED_PRODUCT,
  UPDATE_TOTAL,
  UPDATE_CURRENT_QUANTITY
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case UPDATE_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: [action.selectedProduct],
      }  
    
    case UPDATE_CURRENT_QUANTITY:
      return {
        ...state,
        currentQuantity: action.currentQuantity,
      }

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
      
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    case UPDATE_TOTAL:
      return {
        ...state,
        total: action.total,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
