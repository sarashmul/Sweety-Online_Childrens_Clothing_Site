export const products= [
    {
      id: 1,
      name: "שמלה פרחונית",
      category: "בגדים",
      price: 120,
      description: "שמלה פחונית קלילה עם הדפס פרחים, מושלמת לקיץ.",
      imageUrl: "https://via.placeholder.com/300x400?text=שמלה",
      amount:10,
      // sizes:[{2:5},{4:5},{6:5},{8:5},{10:5},{12:5},{14:5},{16:5},{18:5},{20:5},{22:5},{24:5},{26:5},],
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 2,
      name: "נעלי ספורט",
      category: "נעליים",
      price: 250,
      description: "נעלי ספורט איכותיות לריצה ולהליכה יומיומית.",
      imageUrl: "https://via.placeholder.com/300x400?text=נעלי+ספורט",
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 3,
      name: "תיק גב",
      category: "girls",
      price: 180,
      description: "תיק גב מרווח ועמיד עם תאים מרובים.",
      imageUrl: "https://via.placeholder.com/300x400?text=תיק+גב",
      sizes: {
        30: 5
      }
    },
    {
      id: 4,
      name: "חולצת טי",
      category: "girls",
      price: 70,
      description: "חולצת טי איכותית מ-100% כותנה, מתאימה ליום יום.",
      imageUrl: "https://via.placeholder.com/300x400?text=חולצת+טי",
      sizes: {
        2: 5, 4: 5, 6: 5, 8: 5, 10: 5,
        12: 5, 14: 5, 16: 5
      }
    },
    {
      id: 5,
      name: "שעון יד",
      category: "אקססוריז",
      price: 320,
      description: "שעון יד יוקרתי בעיצוב מודרני.",
      imageUrl: "https://via.placeholder.com/300x400?text=שעון+יד",
      sizes: {
        25: 5
      }
    },
  ];