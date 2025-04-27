import { createStore,combineReducers } from "redux";

import { shopCartReduser } from "./reducers/shopCartReducer";
import { productInventoryReducer } from "./reducers/productInventoryReducer";

const rootReducer=combineReducers({
    shopCart: shopCartReduser,
    productInventory: productInventoryReducer,
 })
 
 export const store = createStore(rootReducer);
 export default store;