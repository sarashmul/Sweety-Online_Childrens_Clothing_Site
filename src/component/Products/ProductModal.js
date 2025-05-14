import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_product } from '../../redux/action';
import { useLocation } from 'react-router-dom';
import CartSidebar from '../ShoppingCart/CartSidebar';
import SizeSelector from './SizeSelector';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export default function ProductModal() {
  const location = useLocation();
  const { product } = location.state || {};
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1); 

  if (!product) return <div className="text-center text-danger mt-5">אין מוצר להצגה</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('יש לבחור במידה הרצויה.');
      return};
    dispatch(add_product({
      ...product,
      selectedSize: parseInt(selectedSize),
      uniqueId: crypto.randomUUID(),
      quantity: quantity
    }));
    setIsCartOpen(true);
  };

  

  // const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);

  const incrementQuantity = () => {
  // קבלת המלאי לפי המידה שנבחרה
  const sizeStock = product?.sizes?.[selectedSize] || 0;

  if (quantity < sizeStock) {
    setQuantity(prevQuantity => prevQuantity + 1); // הוספה אם יש מספיק מלאי
  } else {
    alert('לא ניתן להוסיף יותר מהמלאי הקיים במידה זו');
  }
};
  const decrementQuantity = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
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

<div className="my-3" style={{ maxWidth: '140px' }}>
  <label className="form-label fw-bold">כמות:</label>
  <InputGroup size="sm">
    <Button variant="outline-dark" onClick={decrementQuantity}>−</Button>
    <FormControl
      value={quantity}
      readOnly
      className="text-center bg-light border-dark"
    />
    <Button variant="outline-dark" onClick={incrementQuantity}>+</Button>
  </InputGroup>
</div>


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
