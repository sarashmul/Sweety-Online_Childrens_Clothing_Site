

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Products/ProductCard';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProductsPage() {
  const location = useLocation();
  const { category } = location.state || {};
  const navigate = useNavigate();

  const products = useSelector((state) => state.productInventory.products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log("ProductsPage", products);

  useEffect(() => {
    if (selectedProduct) {
      navigate('/productModal', { state: { product: selectedProduct } });
    }
  }, [selectedProduct, navigate]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };


  return (
    <div className="container mt-5">
      <div className="row">
        {products
         .filter((product) => {
          if (category && subCategory) {
            return product.category === category && product.tat_category === subCategory;
          } else if (category) {
            return product.category === category;  
          }
          return true;  
        })
        
          .map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <ProductCard
                product={product}
                onClick={() => handleProductClick(product)}
              />
            </div>
          ))}
      </div>

    </div>
  );
}
