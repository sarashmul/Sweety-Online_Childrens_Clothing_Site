import React, { useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
  const routes = {
    home: "/",
    products: "/products",
    ShoppingCart: "/ShoppingCart",
    Checkout: "/Checkout",
    SortProduct:"/SortProduct"
  };
 const [searchText,setsearchText]=useState('');
 const navigate = useNavigate();
  const goToSearch = () => {
    navigate(`/SortProducts/${searchText}`);
   };

   
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };
  return (
    <div>
      <div className="shortMessege" >משלוח חינם החל מ199👩‍💻</div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary custom-navbar">
      <div className="container-fluid">
          <Link className="navbar-brand" to={routes.home}>Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={routes.home}>HomePage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.ShoppingCart}>ShoppingCart</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to={routes.products}>Product</Link>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.Checkout}>Checkout</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setsearchText(e.target.value)} onKeyDown={handleKeyDown} />
              <button className="btn btn-outline-success" type="submit" onClick={goToSearch}>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>

  );
}