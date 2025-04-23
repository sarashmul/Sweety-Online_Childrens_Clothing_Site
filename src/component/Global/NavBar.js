import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 import HomePage from '../screens/HomePage';
 import ProductsPage from '../screens/ProductsPage';
import ShoppingCartPage from '../screens/ShoppingCartPage';
import CheckoutPage from '../screens/CheckoutPage';
export default function NavBar() {

    const routs={
        home:"/",
        product:"/product",
        ShoppingCart:"/ShoppingCart",
        Checkout:"/Checkout"
    }

  return (
    <div>
    <BrowserRouter>
      <Link to={routs.home}>homePage</Link>
      <Link to={routs.product}>product</Link>
      <Link to={routs.ShoppingCart}>ShoppingCart</Link>
      <Link to={routs.Checkout}>Checkout</Link>

       <Routes>
        <Route path={routs.home} element={<HomePage/>} />
        <Route path={routs.product} element={<ProductsPage/>} />
        <Route path={routs.ShoppingCart} element={<ShoppingCartPage/>} />
        <Route path={routs.Checkout} element={<CheckoutPage/>} />
       </Routes>
       </BrowserRouter>
    </div>
  )
}
