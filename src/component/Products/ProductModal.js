// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { add_product } from '../../redux/action';
// import { useLocation } from 'react-router-dom';
// import CartSidebar from '../ShoppingCart/CartSidebar';

// export default function ProductModal() {
//   const location = useLocation();
//   const { product } = location.state || {};
//   const dispatch = useDispatch();

//   if (!product) {
//     return <div>אין מוצר להצגה</div>;
//   }
//   const goToSidebar=()=>{
//     <CartSidebar></CartSidebar>
//   };
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6">
//           <h2>{product.name}</h2>
//           <p className="text-muted">קטגוריה: {product.category}</p>
//           <h3 className="text-primary">{product.price}</h3>
//           <p>{product.description}</p>

//           <label htmlFor="sizeSelect">בחרי מידה:</label>
//           <select id="sizeSelect" className="form-control mb-3">
//             <option value="small">קטן</option>
//             <option value="medium">בינוני</option>
//             <option value="large">גדול</option>
//           </select>

//           <button
//             onClick={() => {dispatch(add_product(product)); goToSidebar()}}
//             className="btn btn-primary btn-lg"
//           >
//             הוספה לעגלה
//           </button>
//         </div>

//         <div className="col-md-6">
//           <img
//             src={product.imageUrl}
//             className="img-fluid"
//             alt={product.name}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }






// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { add_product } from '../../redux/action';
// import { useLocation } from 'react-router-dom';
// import CartSidebar from '../ShoppingCart/CartSidebar';
// import SizeSelector from './SizeSelector';

// export default function ProductModal() {
//   const location = useLocation();
//   const { product } = location.state || {};
//   const dispatch = useDispatch();
//   const [isCartOpen, setIsCartOpen] = useState(false); // סטייט חדש להצגת הסיידבר
//     const [selectedSize, setSelectedSize] = useState(null);
  
//   if (!product) {
//     return <div>אין מוצר להצגה</div>;
//   }

//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       return;
//     }
//     const productSelected = {
//       ...product,
//       selectedSize: selectedSize
//     };
//     dispatch(add_product(productSelected));
//     setIsCartOpen(true); // מציג את הסיידבר
//   };

//     const goToSidebar=()=>{
//     <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}></CartSidebar>
//   };
//   return (
//     <>
//       {/* סיידבר תמיד נמצא ברנדר, אבל מוצג רק אם isCartOpen */}
//       {/* <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} /> */}

//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-6">
//             <h2>{product.name}</h2>
//             <p className="text-muted">קטגוריה: {product.category}</p>
//             <h3 className="text-primary">{product.price}</h3>
//             <p>{product.description}</p>

//             {/* <label htmlFor="sizeSelect">בחר מידה:</label> */}
//             {/* <select id="sizeSelect" className="form-control mb-3">
//               <option value="small">קטן</option>
//               <option value="medium">בינוני</option>
//               <option value="large">גדול</option>
//             </select> */}
//             <h5>בחר מידה:</h5>

//             <SizeSelector
//             product={product}
//             onSelect={(size) => {console.log("נבחרה מידה:", size);
//               setSelectedSize(size);
//             }}
//             />

//             <button
//               onClick={()=>{handleAddToCart();goToSidebar()}}
//               className="btn btn-primary btn-lg"
//             >
//               הוספה לעגלה
//             </button>
//           </div>

//           <div className="col-md-6">
//             <img
//               src={product.imageUrl}
//               className="img-fluid"
//               alt={product.name}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_product } from '../../redux/action';
import { useLocation } from 'react-router-dom';
import CartSidebar from '../ShoppingCart/CartSidebar';
import SizeSelector from './SizeSelector';

export default function ProductModal() {
  const location = useLocation();
  const { product } = location.state || {};
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <div>אין מוצר להצגה</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;

    const productSelected = {
      ...product,
      selectedSize: parseInt(selectedSize) ,// לוודא שזה מספר
      uniqueId: crypto.randomUUID()
    };

    dispatch(add_product(productSelected));
    goToSidebar(); // קריאה לפונקציה שמעדכנת את הסטייט
  };

  const goToSidebar = () => {
    setIsCartOpen(true); // משנה את הסטייט => מציג את ה-CartSidebar
  };

  return (
    <>
      {/* סיידבר תמיד ברנדר, מוצג רק אם isCartOpen = true */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p className="text-muted">קטגוריה: {product.category}</p>
            <h3 className="text-primary">{product.price}</h3>
            <p>{product.description}</p>

            <h5>בחר מידה:</h5>

            <SizeSelector
              product={product}
              onSelect={(size) => {
                console.log("נבחרה מידה:", size);
                setSelectedSize(size);
              }}
            />

            <button
              onClick={handleAddToCart}
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
    </>
  );
}
