// import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// function ShopCartProductCard({ product, onRemove,onClick }) {
//   return (
//     // <div style={{cursor: 'pointer'}} onClick={onClick}>
//     // <Card className="h-100 shadow-sm" >
//     <Card className="h-100 shadow-sm" style={{ cursor: 'pointer' }} onClick={() => onClick(product)}>

//       {/* אם יש לך תמונה */}
//       {/* <Card.Img variant="top" src={product.image} alt={product.name} /> */}
//       <Card.Body>
//         <Card.Title>{product.name}</Card.Title>
//         <Card.Text>
//           <strong>מחיר:</strong> ₪{product.price}<br />
//           <strong>כמות:</strong> {product.amount}
//         </Card.Text>
//         <Button variant="danger" 
//         onClick={(e) => {e.stopPropagation();onRemove(product);}}>
//           הסר מהעגלה</Button>
//       </Card.Body>
//     </Card>
//     // </div>
//   );
// }

// export default ShopCartProductCard;



import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ShopCartProductCard({ product, onRemove, onClick }) {
  return (
    <Card 
      className="h-100 shadow-sm" 
      style={{ cursor: 'pointer' }} 
      onClick={() => onClick(product)}
    >
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>מחיר:</strong> ₪{product.price}<br />
          {/* <strong>כמות:</strong> {product.amount} */}
          <strong>מידה:</strong> {product.selectedSize}

        </Card.Text>
        <Button 
          variant="danger" 
          onClick={(e) => {
            e.stopPropagation(); // חשוב שלא יפעיל את ה־onClick של ה־Card
            onRemove(product);
          }}
        >
          🗑
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ShopCartProductCard;
