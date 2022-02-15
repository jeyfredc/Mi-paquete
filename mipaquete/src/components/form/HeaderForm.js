import React from 'react'
import arrowbackorange from "../../assets/arrow_back-orange.svg";

export const HeaderForm = () => {
  return (
    <div className="header__steps-create-account">
    <div className="all-left">
      <div className="left left-arrow-mobile-mode">
        <img src={arrowbackorange} alt="atras" />
      </div>
      <div className="center">
        <h1 className="italic ">Diligencia tus datos</h1>
      </div>
    </div>
    <div className="rigth">
      <p className="required_text">
        Todos los campos son obligatorios
      </p>
    </div>
  </div>
  )
}
