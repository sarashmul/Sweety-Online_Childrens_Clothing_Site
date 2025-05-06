import React from 'react';
import './prodactCard.css'
export default function ProductCard({ product, onClick }) {
  return (
    <div
      className="card"
      style={{ width: '18rem', cursor: 'pointer' }}
      onClick={onClick}
    >
      <img
        src={product.imageUrl}
        className="card-img-top card-img"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-primary">{product.price} ₪</p>
      </div>
    </div>
  );
}
