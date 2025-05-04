import { ADD_PRODUCT,REMOVE_PRODUCT,BUY_PRODUCTS } from "../actinTipes"
const initialState ={
 shopCartProducts:[],
 sumToPay:0,
};

export const shopCartReduser  = (state = initialState, action) => {
    switch (action.type){
        case ADD_PRODUCT:{
            return{...state,shopCartProducts:[...state.shopCartProducts,action.payload],sumToPay: state.sumToPay + action.payload.price};
        };
        case REMOVE_PRODUCT:{
            return{...state,shopCartProducts:state.shopCartProducts.filter(shopCartProduct => shopCartProduct.id !== action.payload.id),sumToPay: state.sumToPay - action.payload.price};
        }
        case BUY_PRODUCTS:{
            return{...state,shopCartProducts:[],sumToPay:0};
        }
        default:
      return state;
    }
}