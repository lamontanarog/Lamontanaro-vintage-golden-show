import React, { useState } from "react";
import { createOrder } from "../service/firestore";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckOutForm";

function CheckoutCart({ cart}) {
  const navigateTo = useNavigate();

  async function handleCheckout(userData) {
    const orderData = {
      buyer: userData,
      items: cart,
      timestamp: new Date(),
    };
    const id = await createOrder(orderData);

    navigateTo(`/checkout/${id}`);
  }

  return (
    <div>
      <CheckoutForm onSubmit={handleCheckout} />
    </div>
  );
}

export default CheckoutCart;