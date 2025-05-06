import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { FaShoppingCart, FaSearch } from "react-icons/fa";

export default function NavBar() {
  const routes = {
    home: "/",
    products: "/products",
    ShoppingCart: "/ShoppingCart",
    Checkout: "/Checkout",
    SortProduct: "/SortProduct",
  };

  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const goToSearch = () => {
    if (searchText.trim()) {
      navigate(`${routes.SortProduct}/${searchText}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      goToSearch();
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to={routes.home}>Navbar</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown">
              <Link className="nav-link" to={`${routes.products}?category=בנים`}>בנים</Link>
              <ul className="dropdown-menu custom-dropdown-menu">
                <li><Link to={`${routes.products}?category=בנים&tat_category=חולצות`} className="dropdown-item">חולצות</Link></li>
                <li><Link to={`${routes.products}?category=בנים&tat_category=מכנסיים`} className="dropdown-item">מכנסיים</Link></li>
                <li><Link to={`${routes.products}?category=בנים&tat_category=סריגים`} className="dropdown-item">סריגים</Link></li>
                <li><Link to={`${routes.products}?category=בנים&tat_category=משהו אחר`} className="dropdown-item">משהו אחר</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link" to={`${routes.products}?category=בנות`}>בנות</Link>
              <ul className="dropdown-menu custom-dropdown-menu">
                <li><Link to={`${routes.products}?category=בנות&tat_category=חולצות`} className="dropdown-item">חולצות</Link></li>
                <li><Link to={`${routes.products}?category=בנות&tat_category=שמלות`} className="dropdown-item">שמלות</Link></li>
                <li><Link to={`${routes.products}?category=בנות&tat_category=סריגים וסוודרים`} className="dropdown-item">סריגים וסוודרים</Link></li>
                <li><Link to={`${routes.products}?category=בנות&tat_category=חצאיות`} className="dropdown-item">חצאיות</Link></li>
                <li><Link to={`${routes.products}?category=בנות&tat_category=אקססוריז`} className="dropdown-item">אקססוריז</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={`${routes.products}?category=בייבי`}>בייבי</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={`${routes.products}?category=basic`}>basic</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link red-text" to={`${routes.products}?category=sale`}>SALE</Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item shopping-cart">
              <Link className="nav-link" to={routes.ShoppingCart}>
                <FaShoppingCart size={20} />
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={(e) => { e.preventDefault(); goToSearch(); }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="btn btn-outline-success" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
