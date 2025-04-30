import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { remove_product } from '../../redux/action';
import { Row, Col, Alert } from 'react-bootstrap';
import ShopCartProductCard from './ShopCartProductCard';
import { useNavigate,useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
export default function ShoppingCartContent({ isSidebar, onCloseSidebar }) {
  const shopCartProducts = useSelector(state => state.shopCart.shopCartProducts);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(remove_product(product));
  };

  const location=useLocation();
  const {category}=location.state||{};
  const routes = {
    product:"/productModal"
  };

  const navigate=useNavigate();
  
  // const goToProduct=(selectedProductCart)=>{
  //   navigate(routes.product,{state:{product:selectedProductCart}})

  // }

  
    // const [selectedProductCart, setSelectedProductCart] = useState(null);
  
    // const ProductCartClick = (product) => {
    //   setSelectedProductCart(product);
    // };

    const ProductCartClick = (product) => {
      console.log("מנווטת למוצר", product);
      if (onCloseSidebar) onCloseSidebar();
      navigate(routes.product, { state: {product:product} });
    };
    

    
  // useEffect(() => {
  //   if (selectedProductCart) {
  //     goToProduct(selectedProductCart);
  //   }
  // }, [selectedProductCart]); // תפעל רק כש selectedProduct משתנה

  return (
    
    <div className={isSidebar ? "cart-content-sidebar" : ""}>
      {shopCartProducts.length === 0 ? (
        <Alert variant="info">העגלה ריקה</Alert>
      ) : (
        <Row xs={1} md={isSidebar ? 1 : 2} className="g-3">
          {shopCartProducts.map(product => (
            <Col key={product.id}>
              {/* <ShopCartProductCard product={product} onRemove={handleRemove} onClick={() => ProductCartClick(product)} /> */}
              <ShopCartProductCard 
  product={product} 
  onRemove={handleRemove} 
  onClick={ProductCartClick} 
/>

            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
