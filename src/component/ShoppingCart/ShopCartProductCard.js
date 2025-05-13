
import React from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { increment_quantity, decrement_quantity } from '../../redux/action';

function ShopCartProductCard({ product, onRemove, onClick }) {
  const dispatch = useDispatch();

  // const handleIncrement = (e) => {
  //   e.stopPropagation();
  //   dispatch(increment_quantity(product.uniqueId));
  // };

  const handleIncrement = (e) => {
  e.stopPropagation();

  // קבלת המלאי לפי המידה שנבחרה
  const sizeStock = product?.sizes?.[product.selectedSize] || 0;

  if (product.quantity < sizeStock) {
    dispatch(increment_quantity(product.uniqueId));
  } else {
    alert('הגעת למלאי המקסימלי של מוצר זה במידה שבחרת');
  }
};


  const handleDecrement = (e) => {
    e.stopPropagation();
    if (product.quantity > 1) {
      dispatch(decrement_quantity(product.uniqueId));
    }
  };

  return (
    <Card 
      className="h-100 shadow-sm p-2" 
      style={{ cursor: 'pointer' }} 
      onClick={() => onClick(product)}
    >
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>מחיר:</strong> ₪{product.price}<br />
          <strong>מידה:</strong> {product.selectedSize}<br />
          <strong>כמות:</strong>
        </Card.Text>

        <InputGroup size="sm" className="mb-3" style={{ maxWidth: '120px' }}>
          <Button variant="outline-secondary" onClick={handleDecrement}>−</Button>
          <FormControl
            value={product.quantity}
            readOnly
            className="text-center bg-light border-dark"
          />
          <Button variant="outline-secondary" onClick={handleIncrement}>+</Button>
        </InputGroup>

        <Button 
          className="btn btn-icon" 
          variant="danger" 
          onClick={(e) => {
            e.stopPropagation();
            onRemove(product);
          }} 
          title="הסר"
        >
          <FaTrashAlt />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ShopCartProductCard;
