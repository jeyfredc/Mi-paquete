import React from "react";

export const ButtonMenu = () => {
  return (
    <div id="button__menu" className="desktop-mode">
      <div id="background__button__menu"></div>
      <div id="content__button__menu">
        <div className="container-user-data__content__button__menu">
          <span className="to-login login">Ingresa</span>
          <span className="to-login create">Regístrate</span>
        </div>
      </div>
      <div id="content__menu" class="" >
        <div class="menu">
          <div class="item-menu">
            <div class="buttons-for-login-or-register">
              <button
                id=""
                class="button-secondary border-none  normal"
                type="button"
              >
                Ingresa
              </button>
              <button id="" class="button-primary   normal" type="button">
                Regístrate
              </button>
            </div>
          </div>
          <hr />
          <div class="item-menu">
            <span>Inicio</span>
          </div>
          <div class="item-menu">
            <span>¿Cómo funciona?</span>
          </div>
          <div class="item-menu">
            <span>Integra tu tienda online</span>
          </div>
          <div class="item-menu">
            <span>Blogística</span>
          </div>
          <div class="item-menu" type="primary">
            <span>Puntos mipaquete</span>
          </div>
        </div>
      </div>
    </div>
  );
};
