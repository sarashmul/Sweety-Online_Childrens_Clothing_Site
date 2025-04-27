import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { remove_product } from '../../redux/action';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ShopCartProductCard from '../ShoppingCart/ShopCartProductCard';

export default function ShoppingCartPage() {

  const shopCartProducts  = useSelector(state => state.shopCart.shopCartProducts);

  const dispatch = useDispatch();
  return (
    <Container className="mt-4">
      <h2 className="mb-4">🛒 עגלת קניות</h2>
      {shopCartProducts.length === 0 ? (
        <Alert variant="info">העגלה ריקה</Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {shopCartProducts.map(product => (
            <Col key={product.id}>
              <ShopCartProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
