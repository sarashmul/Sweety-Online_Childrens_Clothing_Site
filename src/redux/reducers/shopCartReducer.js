import { ADD_PRODUCT,REMOVE_PRODUCT,BUY_PRODUCTS } from "../actinTipes"
const initialState ={
 shopCartProducts:[],
 sumToPay:0,
};

export const shopCartReduser  = (state = initialState, action) => {
    switch (action.type){
        case ADD_PRODUCT:{
            return{...state,shopCartProducts:[...state.shopCartProducts,action.payload]};
        };
        case REMOVE_PRODUCT:{
            return{...state,shopCartProducts:state.shopCartProducts.filter(shopCartProduct => shopCartProduct.id !== action.payload.id)};
        }
        case BUY_PRODUCTS:{
            return{...state,shopCartProducts:[]};
        }
        default:
      return state;
    }
}