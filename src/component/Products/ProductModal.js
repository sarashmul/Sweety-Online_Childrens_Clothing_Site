import React from 'react'
import { useDispatch } from 'react-redux';
import { add_product } from '../../redux/action';

export default function ProductModal({ product, onClose }) {
    const dispatch=useDispatch();

  return(

    <div className ="container mt-5">
    <div className ="row">
       
      <div className ="col-md-6">
      <h2>{product.name}</h2>
        <p className ="text-muted">Category: {product.category}</p>
        <h3 className ="text-primary">{product.price}</h3>
        <p>{product.description}</p>
        
       
        <label for="sizeSelect">Select Size:</label>
        <select id="sizeSelect" className ="form-control mb-3">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <button onClick={() => dispatch(add_product(product))}  className ="btn btn-primary btn-lg" >Add to Cart</button>
      </div>

    
      <div className ="col-md-6">
        <img src={product.imageUrl}  className ="img-fluid" alt={product.name}/>
      </div>
    </div>
  </div>

    
  )
}



  
 