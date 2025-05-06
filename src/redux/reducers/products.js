// export const products= [
//     {
//       id: 1,
//       name: "שמלה פרחונית",
//       category: "בגדים",
//       price: 120,
//       description: "שמלה פחונית קלילה עם הדפס פרחים, מושלמת לקיץ.",
//       imageUrl: "https://via.placeholder.com/300x400?text=שמלה",
//       amount:10,
//       // sizes:[{2:5},{4:5},{6:5},{8:5},{10:5},{12:5},{14:5},{16:5},{18:5},{20:5},{22:5},{24:5},{26:5},],
//       sizes: {
//         2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
//         12: 5, 14: 5, 16: 5
//       }
//     },
//     {
//       id: 2,
//       name: "נעלי ספורט",
//       category: "נעליים",
//       price: 250,
//       description: "נעלי ספורט איכותיות לריצה ולהליכה יומיומית.",
//       imageUrl: "https://via.placeholder.com/300x400?text=נעלי+ספורט",
//       sizes: {
//         2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
//         12: 5, 14: 5, 16: 5
//       }
//     },
//     {
//       id: 3,
//       name: "תיק גב",
//       category: "girls",
//       price: 180,
//       description: "תיק גב מרווח ועמיד עם תאים מרובים.",
//       imageUrl: "https://via.placeholder.com/300x400?text=תיק+גב",
//       sizes: {
//         30: 5
//       }
//     },
//     {
//       id: 4,
//       name: "חולצת טי",
//       category: "girls",
//       price: 70,
//       description: "חולצת טי איכותית מ-100% כותנה, מתאימה ליום יום.",
//       imageUrl: "https://via.placeholder.com/300x400?text=חולצת+טי",
//       sizes: {
//         2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
//         12: 5, 14: 5, 16: 5
//       }
//     },
//     {
//       id: 5,
//       name: "שעון יד",
//       category: "אקססוריז",
//       price: 320,
//       description: "שעון יד יוקרתי בעיצוב מודרני.",
//       imageUrl: "https://via.placeholder.com/300x400?text=שעון+יד",
//       sizes: {
//         25: 5
//       }
//     },
//   ];

  import ImgGirls from './girls.jpg';


  export const products= [
    // בנים
    {
      id: 1,
      name: "חולצת טי מודפסת",
      category: "בנים",
      tat_category: "חולצות",
      price: 50,
      description: "חולצת טי עם הדפס מדליק לבנים.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }    },
    {
      id: 2,
      name: "מכנסי ג’ינס קצרים",
      category: "בנים",
      tat_category: "מכנסיים",
      price: 70,
      description: "מכנסיים נוחים לימי הקיץ החמים.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }    },
    {
      id: 3,
      name: "סריג חורפי",
      category: "בנים",
      tat_category: "סריגים",
      price: 90,
      description: "סריג חמים עם צווארון עגול.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }    },
    {
      id: 4,
      name: "ג׳קט קז׳ואל",
      category: "בנים",
      tat_category: "משהו אחר",
      price: 110,
      description: "ג׳קט אופנתי לבנים לערב.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 14,
      name: "חולצת פולו",
      category: "בנים",
      tat_category: "חולצות",
      price: 60,
      description: "חולצת פולו איכותית ונעימה.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 15,
      name: "טרנינג נוער",
      category: "בנים",
      tat_category: "משהו אחר",
      price: 95,
      description: "טרנינג מושלם לפעילות ספורטיבית.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
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
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 6,
      name: "שמלת קיץ פרחונית",
      category: "בנות",
      tat_category: "שמלות",
      price: 120,
      description: "שמלה קלילה עם הדפס פרחים.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 7,
      name: "סוודר צמר",
      category: "בנות",
      tat_category: "סריגים וסוודרים",
      price: 85,
      description: "סוודר רך ומחמם לימי החורף.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 8,
      name: "חצאית ג׳ינס",
      category: "בנות",
      tat_category: "חצאיות",
      price: 75,
      description: "חצאית ג׳ינס עם גומי נוח.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 9,
      name: "קשת פרחים",
      category: "בנות",
      tat_category: "אקססוריז",
      price: 30,
      description: "קשת לשיער עם עיצוב פרחוני.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 16,
      name: "טישרט עם הדפס",
      category: "בנות",
      tat_category: "חולצות",
      price: 50,
      description: "טישרט עם הדפס צבעוני ומשמח.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 17,
      name: "אוברול פרחוני",
      category: "בנות",
      tat_category: "שמלות",
      price: 130,
      description: "אוברול עם גזרה נשפכת ובד נעים.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
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
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 11,
      name: "טייץ שחור",
      category: "basic",
      tat_category: "מכנסיים",
      price: 35,
      description: "טייץ נוח לפעילות או ללבוש יומיומי.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 18,
      name: "חולצה חלקה בצבע נייבי",
      category: "basic",
      tat_category: "חולצות",
      price: 30,
      description: "חולצה בסיסית ונוחה ליום-יום.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 19,
      name: "גופיית סבא",
      category: "basic",
      tat_category: "חולצות",
      price: 28,
      description: "גופיה עם כפתורים, גזרה נוחה.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
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
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 13,
      name: "מכנסי תינוקות",
      category: "בייבי",
      tat_category: "מכנסיים",
      price: 40,
      description: "מכנסיים גמישים ונעימים במיוחד.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 20,
      name: "סט בגדי גוף צבעוניים",
      category: "בייבי",
      tat_category: "חולצות",
      price: 75,
      description: "שלישיית בגדי גוף במגוון צבעים.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 21,
      name: "כובע תינוק עם אוזניים",
      category: "בייבי",
      tat_category: "משהו אחר",
      price: 35,
      description: "כובע חורף לתינוק עם אוזניים חמודות.",
      imageUrl: ImgGirls,
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    }
  ]
;