// import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { remove_product } from '../../redux/action';
// import { Row, Col, Alert } from 'react-bootstrap';
// import ShopCartProductCard from './ShopCartProductCard';
// import { useNavigate,useLocation } from 'react-router-dom';
// import { useState,useEffect } from 'react';
// export default function ShoppingCartContent({ isSidebar, onCloseSidebar }) {
//   const shopCartProducts = useSelector(state => state.shopCart.shopCartProducts);
//   const dispatch = useDispatch();

//   const handleRemove = (product) => {
//     dispatch(remove_product(product));
//   };

//   const location=useLocation();
//   const {category}=location.state||{};
//   const routes = {
//     product:"/productModal"
//   };

//   const navigate=useNavigate();
  
//   // const goToProduct=(selectedProductCart)=>{
//   //   navigate(routes.product,{state:{product:selectedProductCart}})

//   // }

  
//     // const [selectedProductCart, setSelectedProductCart] = useState(null);
  
//     // const ProductCartClick = (product) => {
//     //   setSelectedProductCart(product);
//     // };

//     const ProductCartClick = (product) => {
//       console.log("מנווטת למוצר", product);
//       if (onCloseSidebar) onCloseSidebar();
//       navigate(routes.product, { state: {product:product} });
//     };
    

    
//   // useEffect(() => {
//   //   if (selectedProductCart) {
//   //     goToProduct(selectedProductCart);
//   //   }
//   // }, [selectedProductCart]); // תפעל רק כש selectedProduct משתנה

//   return (
    
//     <div className={isSidebar ? "cart-content-sidebar" : ""}>
//       {shopCartProducts.length === 0 ? (
//         <Alert variant="info">העגלה ריקה</Alert>
//       ) : (
//         <Row xs={1} md={isSidebar ? 1 : 2} className="g-3">
//           {shopCartProducts.map(product => (
//             <Col key={product.id}>
//               {/* <ShopCartProductCard product={product} onRemove={handleRemove} onClick={() => ProductCartClick(product)} /> */}
//               <ShopCartProductCard 
//   product={product} 
//   onRemove={handleRemove} 
//   onClick={ProductCartClick} 
// />

//             </Col>
//           ))}
//         </Row>
//       )}
//     </div>
//   );
// }


import React, { useMemo } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { remove_product } from '../../redux/action';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import ShopCartProductCard from './ShopCartProductCard';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ShoppingCartContent({ isSidebar, onCloseSidebar }) {
  const shopCartProducts = useSelector(state => state.shopCart.shopCartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (product) => {
    dispatch(remove_product(product));
  };

  const ProductCartClick = (product) => {
    if (onCloseSidebar) onCloseSidebar();
    navigate("/productModal", { state: { product } });
  };

  // const totalPrice =useMemo( shopCartProducts.reduce(
  //   (sum, p) => sum + (p.price * (p.quantity || 1)),
  //   0
  // ));

    const totalPrice=useMemo(()=>{
      return shopCartProducts.reduce((sum, p)=> sum+p.price, 0);
    },[shopCartProducts]);
    console.log(shopCartProducts);
  return (
    <div className={isSidebar ? "cart-content-sidebar" : "cart-content-page"}>
      {shopCartProducts.length === 0 ? (
        <Alert variant="info">העגלה ריקה</Alert>
      ) : (
        <>
          <Row xs={1} className="g-3 mb-4">
            {shopCartProducts.map(product => (
              // <Col key={product.id}>
              <Col key={product.uniqueId}>
                <ShopCartProductCard
                  product={product}
                  onRemove={handleRemove}
                  onClick={ProductCartClick}
                />
              </Col>
              
            ))}
          </Row>
          
          {/* אזור הסיכום והכפתור */}
          <div className={`cart-summary-wrapper ${isSidebar ? 'sidebar' : ''}`}>
            <div className="cart-summary">
              <div><strong>סכום ביניים:</strong> ₪{totalPrice.toFixed(2)}</div>
              {isSidebar && (
  <Button
    variant="success"
    className="w-100 mt-2 go-to-cart-button"
    onClick={() => navigate('/ShoppingCart')}
  >
    מעבר לסל הקניות
  </Button>
)}

              <Button variant="success" className="w-100 mt-2" onClick={() => navigate('/checkout')}>
                מעבר לתשלום
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
