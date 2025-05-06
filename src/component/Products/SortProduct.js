import React from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import ProductCard from "./ProductCard";

export default function SortProduct() {
const {text}=useParams();
const searchText = decodeURIComponent(text || "");
const print=()=>{console.log(searchText);}
print();
const products = useSelector((state) => state.productInventory.products);


function normalizeHebrew(texty) {
    // return texty
    //   .normalize("NFKD")
    //   .replace(/[ךםןףץ]/g, c => {
    //     const map = { ך: "כ", ם: "מ", ן: "נ", ף: "פ", ץ: "צ" };
    //     return map[c] || c;
    //   })
    // //   .replace(/[^\w\s]|_/g, "") // מסיר תווים מיוחדים
    //   .toLowerCase();
    // // return texty;

    return texty
    .normalize("NFKD")
    .replace(/[\u0590-\u05FF]/g, c =>
      c
        .replace("ך", "כ")
        .replace("ם", "מ")
        .replace("ן", "נ")
        .replace("ף", "פ")
        .replace("ץ", "צ")
    )
    .replace(/[^a-zA-Zא-ת0-9\s]/g, "")// מסיר תווים לא אותיות/מספרים/רווחים
    .replace(/[תהוי]/g, "") // מסיר גם את האותיות ת ו-י
    .toLowerCase();
  }

  function searchMatch(texty, searchQuery) {
    const normalizedText = normalizeHebrew(texty);
    const queryWords = normalizeHebrew(searchQuery).split(/\s+/);
    const flag= queryWords.every(word => normalizedText.includes(word));
    console.log(flag);
     return flag;
  }

  const routes = {
    product:"/productModal"
  };
//   searchMatch("חולצה ארוכה לילדים", "חולצה ילדים"); // true
//   searchMatch("חולצה ארוכה", "חולצה קצרה"); // false
const navigate=useNavigate();
const handleProductClick=(selectedProduct)=>{
    navigate(routes.product,{state:{product:selectedProduct}})

  }

  return (
        <div className="container mt-5">
      <div className="row">
        {products
          .filter((product) => !searchText || searchMatch(product.description,searchText))
          .map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductCard
                product={product}
                onClick={() => handleProductClick(product)}
              />
            </div>
          ))}
      </div>
     
    </div>
  )
}

