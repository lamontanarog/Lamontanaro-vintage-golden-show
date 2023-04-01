import React, { useState } from "react";

export default function CheckoutForm(props) {
  const [productData, setProductData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(productData);

  function handleChange(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newProductData = { ...productData };
    newProductData[input] = value;
    setProductData(newProductData);
  }

  function clearForm() {
    setProductData({
      name: "",
      email: "",
      phone: "",
    });
  }

  function submitData(){
    props.onSubmit(productData)
  }

  return (
    <div>
      <h2>Completa tus datos para completar la compra🛍</h2>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
        <input
          value={ProductData.name}
          name="name"
          type="text"
          required
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Email</label>
        <input
          value={ProductData.email}
          name="email"
          type="email"
          required
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Phone</label>
        <input
          value={productData.phone}
          name="phone"
          type="text"
          required
          onChange={handleChange}
        />
      </div>
      <button
        disabled={
          !(
            productData.name !== "" &&
            productData.phone !== "" &&
            productData.email !== ""
          )
        }
        onClick={submitData}
      >
        Crear orden
      </button>
      <button onClick={clearForm}>limpiar form</button>
    </div>
  );
}