import React from "react";
import { LeftMenu } from "../leftmenu/LeftMenu";
import { ButtonMenu } from "../navbar/ButtonMenu";
import { NavBar } from "../navbar/NavBar";

export const Registro = () => {
  return (

    <div id="background-app" >
      <div className="figure__background-app"></div>
      <ButtonMenu />
      <NavBar />
      <LeftMenu />
    </div>
  );
};
