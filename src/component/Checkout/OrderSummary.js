import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function OrderSummary() {
  const [deliveryOption, setDeliveryOption] = useState('free');
  const shoppingProducts = useSelector((state) => state.shopCart.shopCartProducts);
  const shoppingSum = useSelector((state) => state.shopCart.sumToPay);

  const handleDeliveryChange = (event) => {
    setDeliveryOption(event.target.value);
  };

  const deliveryPrice = deliveryOption === 'free' ? 0 : 15;
  const totalPrice = shoppingSum + deliveryPrice;

  return (
    <div>
      <div className="p-3">
        <h4 className="mb-3 border-bottom pb-2 text-center fw-bold">סיכום הזמנה</h4>

        {/* רשימת מוצרים */}
        <div className="mb-3">
          <p className="fw-bold mb-2">המוצרים בעגלה:</p>
          {shoppingProducts.map((product, index) => (
            <div key={index} className="d-flex justify-content-between small border-bottom py-1">
              <div>
                <span className="fw-bold">{product.name}</span>
                {product.size && (
                  <span className="text-muted ms-2">(מידה: {product.size})</span>
                )}
              </div>
              <span className="fw-bold">{product.price} ש"ח</span>
            </div>
          ))}
        </div>

        {/* פרטי הזמנה */}
        <div className="d-flex justify-content-between py-2">
          <span className="fw-bold">פרטי ההזמנה:</span>
          <span><strong>{shoppingSum} ש"ח</strong></span>
        </div>

        <div className="d-flex justify-content-between py-2 text-muted small">
          <span>מס׳ חשבונית: 788152</span>
          <span>הנחה: <strong>19 ש"ח</strong></span>
        </div>

        <div className="d-flex justify-content-between py-2 text-muted small">
          <span>תאריך חשבונית: 22 דצמבר 2019</span>
          <span>מע״מ 18%: <strong>123 ש"ח</strong></span>
        </div>

        <div className="d-flex justify-content-between py-2 mb-4 text-muted small">
          <span>שובר קבלה: 18KU-62IIK</span>
          <span>משלוח: <strong>{deliveryOption === 'free' ? 'חינם' : '15 ש"ח'}</strong></span>
        </div>

        {/* אפשרויות משלוח */}
        <div className="mb-4">
          <p className="fw-bold mb-2">בחר אפשרות משלוח:</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="delivery"
              id="freeDelivery"
              value="free"
              checked={deliveryOption === 'free'}
              onChange={handleDeliveryChange}
            />
            <label className="form-check-label" htmlFor="freeDelivery">
              משלוח רגיל - חינם (עד 7 ימי עסקים)
            </label>
          </div>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="delivery"
              id="expressDelivery"
              value="express"
              checked={deliveryOption === 'express'}
              onChange={handleDeliveryChange}
            />
            <label className="form-check-label" htmlFor="expressDelivery">
              משלוח אקספרס - 15 ש"ח (עד 2 ימי עסקים)
            </label>
          </div>
        </div>
      </div>

      {/* סכום סופי */}
      <div className="bg-primary text-white text-end px-4 py-3 rounded-bottom">
        <h5 className="mb-0">
          סה״כ לתשלום:
          <span className="h4 ms-2">{totalPrice} ש"ח</span>
        </h5>
      </div>
    </div>
  );
}
