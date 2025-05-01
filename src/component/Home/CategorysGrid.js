import React from 'react'
import CategoryCard from './CategoryCard'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ImgGirls from '../screens/Image/girls.jpg'
import ImgBoys from "../screens/Image/boys.jpg"
import ImgBasic from "../screens/Image/basic.jpg"
export default function CategorysGrid() {
  const routes = {
    home: "/",
    products: "/products",
    ShoppingCart: "/ShoppingCart",
    Checkout: "/Checkout",
    product: "/productModal",
    productsByCategory: "/productsByCategory"
  };
  const navigate = useNavigate();
  const goToProductsByCategory = (selectedCategory) => {
    navigate(routes.products, { state: { category: selectedCategory } })
  }
  const [categorys, setCategorys] = useState([
    {
      name: "girls",
      img: ImgGirls
    },
    {
      name: "boys",
      img: ImgBoys
    },
    {
      name: "basic",
      img: ImgBasic
    },
    {
      name: "sets",
      img: ImgBasic
    }])
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
  };

  return (

    <div className="container mt-5">
      <div className="row">
        {categorys.map(category => (
          <div className="col-md-3 mb-4" key={category.name}>
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
