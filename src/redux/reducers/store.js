import { createStore,combineReducers } from "redux";

import { shopCartReduser } from "./shopCartReducer";
import { productInventoryReducer } from "./productInventoryReducer";

const rootReducer=combineReducers({
    shopCart: shopCartReduser,
    productInventory: productInventoryReducer,
 })
 
 export const store = createStore(rootReducer);
 export default store;