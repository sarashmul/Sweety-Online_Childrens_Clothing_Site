import { BUY_PRODUCTS } from "../actinTipes";
import ImgGirls from './girls.jpg';

const initialState = {
  products: [
    // בנים
    {
      id: 1,
      name: "חולצת טי מודפסת",
      category: "בנים",
      tat_category: "חולצות",
      price: 50,
      description: "חולצת טי עם הדפס מדליק לבנים.",
      imageUrl: ImgGirls,
      amount: 15,
    },
    {
      id: 2,
      name: "מכנסי ג’ינס קצרים",
      category: "בנים",
      tat_category: "מכנסיים",
      price: 70,
      description: "מכנסיים נוחים לימי הקיץ החמים.",
      imageUrl: ImgGirls,
      amount: 10,
    },
    {
      id: 3,
      name: "סריג חורפי",
      category: "בנים",
      tat_category: "סריגים",
      price: 90,
      description: "סריג חמים עם צווארון עגול.",
      imageUrl: ImgGirls,
      amount: 8,
    },
    {
      id: 4,
      name: "ג׳קט קז׳ואל",
      category: "בנים",
      tat_category: "משהו אחר",
      price: 110,
      description: "ג׳קט אופנתי לבנים לערב.",
      imageUrl: ImgGirls,
      amount: 6,
    },
    {
      id: 14,
      name: "חולצת פולו",
      category: "בנים",
      tat_category: "חולצות",
      price: 60,
      description: "חולצת פולו איכותית ונעימה.",
      imageUrl: ImgGirls,
      amount: 11,
    },
    {
      id: 15,
      name: "טרנינג נוער",
      category: "בנים",
      tat_category: "משהו אחר",
      price: 95,
      description: "טרנינג מושלם לפעילות ספורטיבית.",
      imageUrl: ImgGirls,
      amount: 9,
    },

    // בנות
    {
      id: 5,
      name: "חולצת שיפון אלגנטית",
      category: "בנות",
      tat_category: "חולצות",
      price: 65,
      description: "חולצה אלגנטית עם כפתורים.",
      imageUrl: ImgGirls,
      amount: 12,
    },
    {
      id: 6,
      name: "שמלת קיץ פרחונית",
      category: "בנות",
      tat_category: "שמלות",
      price: 120,
      description: "שמלה קלילה עם הדפס פרחים.",
      imageUrl: ImgGirls,
      amount: 9,
    },
    {
      id: 7,
      name: "סוודר צמר",
      category: "בנות",
      tat_category: "סריגים וסוודרים",
      price: 85,
      description: "סוודר רך ומחמם לימי החורף.",
      imageUrl: ImgGirls,
      amount: 7,
    },
    {
      id: 8,
      name: "חצאית ג׳ינס",
      category: "בנות",
      tat_category: "חצאיות",
      price: 75,
      description: "חצאית ג׳ינס עם גומי נוח.",
      imageUrl: ImgGirls,
      amount: 14,
    },
    {
      id: 9,
      name: "קשת פרחים",
      category: "בנות",
      tat_category: "אקססוריז",
      price: 30,
      description: "קשת לשיער עם עיצוב פרחוני.",
      imageUrl: ImgGirls,
      amount: 20,
    },
    {
      id: 16,
      name: "טישרט עם הדפס",
      category: "בנות",
      tat_category: "חולצות",
      price: 50,
      description: "טישרט עם הדפס צבעוני ומשמח.",
      imageUrl: ImgGirls,
      amount: 13,
    },
    {
      id: 17,
      name: "אוברול פרחוני",
      category: "בנות",
      tat_category: "שמלות",
      price: 130,
      description: "אוברול עם גזרה נשפכת ובד נעים.",
      imageUrl: ImgGirls,
      amount: 7,
    },

    // בייסיק
    {
      id: 10,
      name: "גופיה לבנה",
      category: "basic",
      tat_category: "חולצות",
      price: 25,
      description: "גופיה פשוטה ליום-יום.",
      imageUrl: ImgGirls,
      amount: 30,
    },
    {
      id: 11,
      name: "טייץ שחור",
      category: "basic",
      tat_category: "מכנסיים",
      price: 35,
      description: "טייץ נוח לפעילות או ללבוש יומיומי.",
      imageUrl: ImgGirls,
      amount: 25,
    },
    {
      id: 18,
      name: "חולצה חלקה בצבע נייבי",
      category: "basic",
      tat_category: "חולצות",
      price: 30,
      description: "חולצה בסיסית ונוחה ליום-יום.",
      imageUrl: ImgGirls,
      amount: 22,
    },
    {
      id: 19,
      name: "גופיית סבא",
      category: "basic",
      tat_category: "חולצות",
      price: 28,
      description: "גופיה עם כפתורים, גזרה נוחה.",
      imageUrl: ImgGirls,
      amount: 18,
    },

    // בייבי
    {
      id: 12,
      name: "אוברול כותנה",
      category: "בייבי",
      tat_category: "חולצות",
      price: 60,
      description: "אוברול רך לתינוקות, 100% כותנה.",
      imageUrl: ImgGirls,
      amount: 18,
    },
    {
      id: 13,
      name: "מכנסי תינוקות",
      category: "בייבי",
      tat_category: "מכנסיים",
      price: 40,
      description: "מכנסיים גמישים ונעימים במיוחד.",
      imageUrl: ImgGirls,
      amount: 16,
    },
    {
      id: 20,
      name: "סט בגדי גוף צבעוניים",
      category: "בייבי",
      tat_category: "חולצות",
      price: 75,
      description: "שלישיית בגדי גוף במגוון צבעים.",
      imageUrl: ImgGirls,
      amount: 20,
    },
    {
      id: 21,
      name: "כובע תינוק עם אוזניים",
      category: "בייבי",
      tat_category: "משהו אחר",
      price: 35,
      description: "כובע חורף לתינוק עם אוזניים חמודות.",
      imageUrl: ImgGirls,
      amount: 10,
    }
  ]
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
};
