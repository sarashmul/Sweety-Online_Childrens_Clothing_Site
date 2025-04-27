import { ADD_PRODUCT,REMOVE_PRODUCT,BUY_PRODUCTS } from "../actinTipes"
const initialState ={
 shopCart:[],
};

export const shopCartReduser  = (state = initialState, action) => {
    switch (action.type){
        case ADD_PRODUCT:{
            return{...state,}
        }
    }
}