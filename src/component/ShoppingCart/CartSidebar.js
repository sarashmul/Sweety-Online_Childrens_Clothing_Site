import React from 'react';
import ShoppingCartContent from './ShoppingCartContent';
// import './CartSidebar.css';

export default function CartSidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} />}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={onClose}>×</button>
        <h4 className="mb-3">🛒 עגלת קניות</h4>
        <div className="cart-sidebar-content">
        <ShoppingCartContent isSidebar={true} onCloseSidebar={onClose}/>
      </div>
      </div>

    </>
  );
}

