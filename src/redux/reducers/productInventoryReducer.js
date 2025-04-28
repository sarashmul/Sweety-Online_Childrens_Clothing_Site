import { BUY_PRODUCTS } from "../actinTipes";

const initialState ={
    products: [
      {
        id: 1,
        name: "שמלה פרחונית",
        category: "בגדים",
        price: 120,
        description: "שמלה קלילה עם הדפס פרחים, מושלמת לקיץ.",
        imageUrl: "https://via.placeholder.com/300x400?text=שמלה",
      },
      {
        id: 2,
        name: "נעלי ספורט",
        category: "נעליים",
        price: 250,
        description: "נעלי ספורט איכותיות לריצה ולהליכה יומיומית.",
        imageUrl: "https://via.placeholder.com/300x400?text=נעלי+ספורט",
      },
      {
        id: 3,
        name: "תיק גב",
        category: "girls",
        price: 180,
        description: "תיק גב מרווח ועמיד עם תאים מרובים.",
        imageUrl: "https://via.placeholder.com/300x400?text=תיק+גב",
      },
      {
        id: 4,
        name: "חולצת טי",
        category: "girls",
        price: 70,
        description: "חולצת טי איכותית מ-100% כותנה, מתאימה ליום יום.",
        imageUrl: "https://via.placeholder.com/300x400?text=חולצת+טי",
      },
      {
        id: 5,
        name: "שעון יד",
        category: "אקססוריז",
        price: 320,
        description: "שעון יד יוקרתי בעיצוב מודרני.",
        imageUrl: "https://via.placeholder.com/300x400?text=שעון+יד",
      },
    ],
  
};

export const productInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCTS: {
      const boughtProducts = action.payload;
      return {
        ...state,
        products: state.products.map(product => {
          const boughtProduct = boughtProducts.find(p => p.id === product.id);
          if (boughtProduct) {
            return { ...product, amount: product.amount - 1 };
          }
          return product;
        })
      };
    }
    default:
      return state;
  }
}
