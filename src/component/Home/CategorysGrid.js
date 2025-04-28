import React from 'react'
import CategoryCard from './CategoryCard'
import ProductsPage from '../screens/ProductsPage'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function CategorysGrid() {
    const routes = {
        home: "/",
        products: "/products",
        ShoppingCart: "/ShoppingCart",
        Checkout: "/Checkout",
        product:"/productModal",
        productsByCategory:"/productsByCategory"
      };
      const navigate=useNavigate();
      const goToProductsByCategory=(selectedCategory)=>{
        navigate(routes.products,{state:{category:selectedCategory}})
      }
const [categorys, setCategorys] = useState(["girls", "boys", "basic"])
const [selectedCategory, setSelectedCategory] = useState(null);

const handleCategoryClick = (category) => {
  setSelectedCategory(category);
};
    
  return (
    
      <div className="container mt-5">
          <div className="row">
            {categorys.map(category => (
              <div className="col-md-4 mb-4" key={category}>
                <CategoryCard
                  category={category}
                  onClick={() => handleCategoryClick(category)}
                />
              </div>
            ))}
          </div>
          {selectedCategory && (
           goToProductsByCategory(selectedCategory)
          )}
        </div>
    
  )
}
