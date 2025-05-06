
import { products } from "./products";

const initialState = {
  products: products

};




export const productInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCTS: {
      console.log("BUY_PRODUCTS fired", action.payload);
      console.log("BUY_PRODUCTS stay", products);

      const boughtProducts = action.payload;
      debugger
      return {
        ...state,
        products: state.products.map(product => {
          const boughtProduct = boughtProducts.find(p => p.id === product.id);
          if (!boughtProduct) return product;

          const sizeToReduce = boughtProduct.selectedSize;
          const updatedSizes = {
            ...product.sizes,
            [sizeToReduce]: Math.max(0, (product.sizes[sizeToReduce] || 0) - 1)
          };

          return {
            ...product,
            sizes: updatedSizes
          };
        })
      };
    }

    default:
      return state;
  }

};

