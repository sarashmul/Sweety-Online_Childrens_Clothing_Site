import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ShopCartProductCard({ product, onRemove }) {
  return (
    <Card className="h-100 shadow-sm">
      {/* אם יש לך תמונה */}
      {/* <Card.Img variant="top" src={product.image} alt={product.name} /> */}
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>מחיר:</strong> ₪{product.price}<br />
          <strong>כמות:</strong> {product.amount}
        </Card.Text>
        <Button variant="danger" onClick={() => onRemove(product)}>
          הסר מהעגלה
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ShopCartProductCard;

