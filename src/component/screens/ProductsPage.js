

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Products/ProductCard';
import ProductModal from '../Products/ProductModal';
import { useNavigate, useLocation } from 'react-router-dom';


export default function ProductsPage() {


  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const category = query.get('category') || '';
  const subCategory = query.get('tat_category') || '';



  const routes = {
    product: "/productModal"
  };

  const navigate = useNavigate();

  const goToProduct = (selectedProduct) => {
    navigate(routes.product, { state: { product: selectedProduct } })

  }


  const products = useSelector((state) => state.productInventory.products);

  const [selectedProduct, setSelectedProduct] = useState(null);

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



      {selectedProduct && (
        goToProduct(selectedProduct)
      )}
    </div>

  )

}