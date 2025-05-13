
// import { products } from "./products";
// import { BUY_PRODUCTS } from "../actinTipes";
// const initialState = {
//   products: products

// };




// export const productInventoryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_PRODUCTS: {
//       console.log("BUY_PRODUCTS fired", action.payload);
//       console.log("BUY_PRODUCTS stay", products);

//       const boughtProducts = action.payload;
//       debugger
//       return {
//         ...state,
//         products: state.products.map(product => {
//           const boughtProduct = boughtProducts.find(p => p.id === product.id);
//           if (!boughtProduct) return product;

//           const sizeToReduce = boughtProduct.selectedSize;
//           const updatedSizes = {
//             ...product.sizes,
//             [sizeToReduce]: Math.max(0, (product.sizes[sizeToReduce] || 0) - 1)
//           };

//           return {
//             ...product,
//             sizes: updatedSizes
//           };
//         })
//       };
//     }

//     default:
//       return state;
//   }

// };

import { products } from "./products";
import { BUY_PRODUCTS } from "../actinTipes";

const initialState = {
  products: products,
};

export const productInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCTS: {
      const boughtProducts = Array.isArray(action.payload) ? action.payload : [];

      return {
        ...state,
        products: state.products.map(product => {
          // חיפוש האם המוצר הזה נרכש
          const boughtProduct = boughtProducts.find(p => p.id === product.id);

          if (!boughtProduct) return product;

          const size = boughtProduct.selectedSize;
          const quantity = boughtProduct.quantity || 1;

          const currentStock = product.sizes[size] || 0;

          return {
            ...product,
            sizes: {
              ...product.sizes,
              [size]: Math.max(0, currentStock - quantity),
            },
          };
        }),
      };
    }

    default:
      return state;
  }
};
