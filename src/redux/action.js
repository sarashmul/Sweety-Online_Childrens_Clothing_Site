import { ADD_PRODUCT } from "./actinTipes";
import { REMOVE_PRODUCT } from "./actinTipes";
import { BUY_PRODUCTS } from "./actinTipes";
import { INCREMENT_QUANTITY } from "./actinTipes";
import { DECREMENT_QUANTITY } from "./actinTipes";
export const add_product = (product) => ({
    type: ADD_PRODUCT, 
    payload: product,
});

export const remove_product = (product) => ({ // Assuming you want to remove by id
    type: REMOVE_PRODUCT,
    payload: product // Pass the id or index to be removed
});

export const buy_products = (products) => ({ // Assuming you want to remove by id
    type: BUY_PRODUCTS,
    payload: products // Pass the id or index to be removed
});

export const increment_quantity = (id) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

export const decrement_quantity = (id) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});
