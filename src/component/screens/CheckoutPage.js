import React from 'react'
import OrderDetails from '../Checkout/OrderDetails'
import CardWrapper from '../Checkout/CardWrapper'
import CreditCardForm from '../Checkout/CreditCardForm'


export default function CheckoutPage() {
  return (
    <div>

       <h1>דף תשלום</h1>
       
       <CardWrapper> 
       <OrderDetails></OrderDetails>
       </CardWrapper>

       <CardWrapper>
       
       </CardWrapper>

       <CardWrapper>
       <CreditCardForm></CreditCardForm>
       </CardWrapper>

       <div>
        <button onClick={}>שליחת הזמנה</button>
       </div>
    </div>
  )
}
