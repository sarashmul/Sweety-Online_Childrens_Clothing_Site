import { ADD_PRODUCT,REMOVE_PRODUCT,BUY_PRODUCTS,DECREMENT_QUANTITY,INCREMENT_QUANTITY } from "../actinTipes"
const initialState ={
 shopCartProducts:[],
};

export const shopCartReduser  = (state = initialState, action) => {
    console.log("Current state:", state);
console.log("Action:", action);
    switch (action.type){
        case ADD_PRODUCT:{
            return{...state,shopCartProducts:[action.payload,...state.shopCartProducts]};
        };
        case REMOVE_PRODUCT:{
            return{...state,shopCartProducts:state.shopCartProducts.filter(shopCartProduct => shopCartProduct.uniqueId !== action.payload.uniqueId)};
        }
        case BUY_PRODUCTS:{
            return{...state,shopCartProducts:[]};
        }
 case INCREMENT_QUANTITY:
  return {
    ...state,
    shopCartProducts: state.shopCartProducts.map((item) =>
      item.uniqueId === action.payload
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ),
  };

case DECREMENT_QUANTITY:
  return {
    ...state,
    shopCartProducts: state.shopCartProducts.map((item) =>
      item.uniqueId === action.payload && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ),
  };

        default:
      return state;
    }
}