import React, { useState } from "react";
import "./style.css"

export default function CheckOutForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(userData);

  function handleChange(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newUserData = { ...userData };
    newUserData[input] = value;
    setUserData(newUserData);
  }

  function clearForm() {
    setUserData({
      name: "",
      email: "",
      phone: "",
    });
  }

  function submitData(){
    props.onSubmit(userData)
  }

  return (
    <div className="father-form-checkoutform">
      <h2>Rellena tus datos para completar la compra</h2>
      <div >
        <label className="label-form">Nombre</label>
        <input
          value={userData.name}
          name="name"
          type="text"
          required
          onChange={handleChange}
        />
      </div>

      <div >
        <label className="label-form">Email</label>
        <input
          value={userData.email}
          name="email"
          type="email"
          required
          onChange={handleChange}
        />
      </div>

      <div >
        <label className="label-form">Phone</label>
        <input
          value={userData.phone}
          name="phone"
          type="text"
          required
          onChange={handleChange}
        />
      </div>
      <button className="button-form"
        disabled={
          !(
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== ""
          )
        }
        onClick={submitData}
      >
        Crear orden
      </button>
      <button className="button-form" onClick={clearForm}>limpiar form</button>
    </div>
  );
}