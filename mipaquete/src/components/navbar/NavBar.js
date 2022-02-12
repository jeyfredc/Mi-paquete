import React from "react";
import logo from "../../assets/logo.svg";
import { Form } from "../form/Form";

export const NavBar = () => {
  return (
    <div>
      <div id="header" className="desktop-mode">
        <img id="logo" src={logo} alt="logo" />
        <ul>
          <li>Inicio</li>
          <li>¿Cómo funciona?</li>
          <li>Integra tu tienda online</li>
          <li>Blogística</li>
          <li>Puntos mipaquete</li>
        </ul>
      </div>
      <div>
      <Form />
      </div>
    </div>
          
  );
};
