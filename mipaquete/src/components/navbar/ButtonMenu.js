import React from "react";

export const ButtonMenu = () => {
  return (
    <div
      id="button__menu"
      className="desktop-mode"
    >
      <div id="background__button__menu"></div>
      <div id="content__button__menu">
        <div className="container-user-data__content__button__menu">
          <span className="to-login login">Ingresa</span>
          <span className="to-login create">Regístrate</span>
        </div>
      </div>
    </div>
  );
};
