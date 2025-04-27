import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProductCard from '../Products/ProductCard';
import ProductModal from '../Products/ProductModal';

export default function ProductsPage() {
  const products=useSelector((state)=>state.productInventory.products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="container mt-5">
  <div className="row">
    {products.map(product => (
      <div key={product.id} className="col-md-4 mb-4">
        <ProductCard 
          product={product}
          onClick={() => handleProductClick(product)}
        />
      </div>
    ))}
  </div>
  {selectedProduct && (
      <ProductModal 
        product={selectedProduct}
        onClose={closeModal}
      />
    )}
</div>

  )
}

