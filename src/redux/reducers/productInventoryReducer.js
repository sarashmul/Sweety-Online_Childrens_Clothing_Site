// import { BUY_PRODUCTS } from "../actinTipes";
// import { products } from "./products";
// const initialState ={
//     products: products
  
// };

// export const productInventoryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_PRODUCTS: {
//       const boughtProducts = action.payload;
//       return {
//         ...state,
//         products: state.products.map(product => {
//           const boughtProduct = boughtProducts.find(p => p.id === product.id);
//           if (boughtProduct) {
//             return { ...product, amount: product.amount - 1 };
//           }
//           return product;
//         })
//       };
//     }
//     default:
//       return state;
//   }
// }


import { BUY_PRODUCTS } from "../actinTipes";
import { products } from "./products";

const initialState = {
  products: products
};

// export const productInventoryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_PRODUCTS: {
//       const boughtProducts = action.payload;
//       return {
//         ...state,
//         products: state.products.map(product => {
//           const boughtProduct = boughtProducts.find(p => p.id === product.id);
//           if (boughtProduct) {
//             const updatedSizes = product.sizes.map(sizeObj => {
//               const [sizeKey, quantity] = Object.entries(sizeObj)[0];
//               if (parseInt(sizeKey) === boughtProduct.selectedSize && quantity > 0) {
//                 return { [sizeKey]: quantity - 1 };
//               }
//               return sizeObj;
//             });

//             return {
//               ...product,
//               sizes: updatedSizes
//             };
//           }
//           return product;
//         })
//       };
//     }

//     default:
//       return state;
//   }
// };





// export const productInventoryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_PRODUCTS: {
//       const boughtProducts = action.payload;

//       return {
//         ...state,
//         products: state.products.map(product => {
//           const boughtProduct = boughtProducts.find(p => p.id === product.id);
//           if (!boughtProduct) return product;

//           const updatedSizes = product.sizes.map(sizeObj => {
//             const sizeKey = Object.keys(sizeObj)[0];
//             const sizeValue = sizeObj[sizeKey];

//             if (parseInt(sizeKey) === boughtProduct.selectedSize && sizeValue > 0) {
//               return { [sizeKey]: sizeValue - 1 };
//             }

//             return sizeObj;
//           });

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