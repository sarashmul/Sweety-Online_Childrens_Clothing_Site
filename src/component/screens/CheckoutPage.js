import React from 'react'
import OrderDetails from '../Checkout/OrderDetails'
import CardWrapper from '../Checkout/CardWrapper'
import CreditCardForm from '../Checkout/CreditCardForm'
import OrderSummary from '../Checkout/OrderSummary'

export default function CheckoutPage() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">דף תשלום</h2>

      <div className="row g-12">

        <div className="col-md-5">
          <CardWrapper>
            <OrderSummary />
          </CardWrapper>
        </div>
        <div className="col-md-7">
          <CardWrapper>
            <OrderDetails />
          </CardWrapper>
        </div>
      </div>
      <div className="row creditCard">
        <div className="col-md-5">
          <CardWrapper>
            <CreditCardForm />
          </CardWrapper>
        </div>
      </div>
      
    </div>
  )
}
