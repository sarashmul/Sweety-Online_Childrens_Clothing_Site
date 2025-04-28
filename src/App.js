import './App.css';
import NavBar from './component/Global/NavBar';
import Footer from './component/Global/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './component/screens/HomePage';
import ProductsPage from './component/screens/ProductsPage';
import ShoppingCartPage from './component/screens/ShoppingCartPage';
import CheckoutPage from './component/screens/CheckoutPage';


function App() {
  const routes = {
    home: "/",
    product: "/product",
    ShoppingCart: "/ShoppingCart",
    Checkout: "/Checkout"
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <NavBar />
          
      
          <Routes>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.product} element={<ProductsPage />} />
            <Route path={routes.ShoppingCart} element={<ShoppingCartPage />} />
            <Route path={routes.Checkout} element={<CheckoutPage />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
