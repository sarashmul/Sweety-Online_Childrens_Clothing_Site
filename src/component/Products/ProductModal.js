import React from 'react';
import { useDispatch } from 'react-redux';
import { add_product } from '../../redux/action';
import { useLocation } from 'react-router-dom';

export default function ProductModal() {
  const location = useLocation();
  const { product } = location.state || {};
  const dispatch = useDispatch();

  if (!product) {
    return <div>אין מוצר להצגה</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">קטגוריה: {product.category}</p>
          <h3 className="text-primary">{product.price}</h3>
          <p>{product.description}</p>

          <label htmlFor="sizeSelect">בחרי מידה:</label>
          <select id="sizeSelect" className="form-control mb-3">
            <option value="small">קטן</option>
            <option value="medium">בינוני</option>
            <option value="large">גדול</option>
          </select>

          <button
            onClick={() => dispatch(add_product(product))}
            className="btn btn-primary btn-lg"
          >
            הוספה לעגלה
          </button>
        </div>

        <div className="col-md-6">
          <img
            src={product.imageUrl}
            className="img-fluid"
            alt={product.name}
          />
        </div>
      </div>
    </div>
  );
}
