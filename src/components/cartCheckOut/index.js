import React from "react";
import { createOrder } from "../service/firestore";
import { useNavigate } from "react-router-dom";
import CheckOutForm from "../cartContainer/index"
;

function CheckoutCart({ cart, cartTotal}) {
  const navigateTo = useNavigate();

  async function handleCheckout(userData) {
    const orderData = {
      buyer: userData,
      items: cart,
      total: cartTotal,
      timestamp: new Date(),
    };
    const id = await createOrder(orderData);

    navigateTo(`/checkout/${id}`);
  }

  return (
    <div>
      <CheckOutForm onSubmit={handleCheckout} />
    </div>
  );
}

export default CheckoutCart;