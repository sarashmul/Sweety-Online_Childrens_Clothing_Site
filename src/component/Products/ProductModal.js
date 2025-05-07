import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_product } from '../../redux/action';
import { useLocation } from 'react-router-dom';
import CartSidebar from '../ShoppingCart/CartSidebar';
import SizeSelector from './SizeSelector';

export default function ProductModal() {
  const location = useLocation();
  const { product } = location.state || {};
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <div className="text-center text-danger mt-5">אין מוצר להצגה</div>;

  const handleAddToCart = () => {
    if (!selectedSize) return;
    dispatch(add_product({
      ...product,
      selectedSize: parseInt(selectedSize),
      uniqueId: crypto.randomUUID()
    }));
    setIsCartOpen(true);
  };

  return (
    <>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <div className="container py-5">
        <div className="row align-items-center">
          {/* תמונה בצד שמאל */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: '450px', borderRadius: '12px' }}
            />
          </div>

          {/* פרטי מוצר בצד ימין */}
          <div className="col-md-6">
            <h2 className="fw-bold text-dark mb-2">{product.name}</h2>
            <p className="text-secondary mb-1">קטגוריה: {product.category}</p>
            <h4 className="text-primary fw-bold my-3">₪{product.price}</h4>
            <p className="text-muted mb-4">{product.description}</p>

            <h5 className="mb-2">בחר מידה:</h5>
            <SizeSelector product={product} onSelect={setSelectedSize} />

            <button
              onClick={handleAddToCart}
              className="btn btn-dark btn-lg w-100 mt-4"
            >
              הוספה לעגלה 🛒
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
