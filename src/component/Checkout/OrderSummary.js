import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function OrderSummary() {
  const [deliveryOption, setDeliveryOption] = useState('free');
  const shoppingProducts = useSelector((state) => state.shopCart.shopCartProducts);
  const shoppingSum = useSelector((state) => state.shopCart.sumToPay);


  const handleDeliveryChange = (event) => {
    setDeliveryOption(event.target.value);
  };

  const totalPrice = deliveryOption === 'free' ? 1040 : 1055;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4 className="mb-4 border-bottom pb-2">סיכום הזמנה</h4>

        <div className="d-flex justify-content-between py-2">
          <p className="fw-bold mb-0">פרטי ההזמנה</p>
          <p className="text-muted mb-0">
            <span className="fw-bold me-2">סה״כ:</span>  {shoppingSum} ש"ח
          </p>
        </div>

        <div className="d-flex justify-content-between py-2">
          <p className="text-muted mb-0">מס׳ חשבונית: 788152</p>
          <p className="text-muted mb-0">
            <span className="fw-bold me-2">הנחה:</span> $19.00
          </p>
        </div>

        <div className="d-flex justify-content-between py-2">
          <p className="text-muted mb-0">תאריך חשבונית: 22 Dec, 2019</p>
          <p className="text-muted mb-0">
            <span className="fw-bold me-2">מע״מ 18%:</span> $123
          </p>
        </div>

        <div className="d-flex justify-content-between py-2 mb-4">
          <p className="text-muted mb-0">שובר קבלה: 18KU-62IIK</p>
          <p className="text-muted mb-0">
            <span className="fw-bold me-2">משלוח:</span> {deliveryOption === 'free' ? 'חינם' : '$15'}
          </p>
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
              משלוח אקספרס - $15 (עד 2 ימי עסקים)
            </label>
          </div>
        </div>
      </div>

      {/* סכום סופי - ללא שוליים מסביב, תופס את כל הרוחב */}
      <div className="bg-primary text-white text-end px-4 py-4 rounded-bottom">
        <h5 className="mb-0">
          סה״כ לתשלום:
          <span className="h3 ms-2">${totalPrice}</span>
        </h5>
      </div>
    </div>
  );
}
