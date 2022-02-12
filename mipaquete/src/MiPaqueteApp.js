import React from "react";
import { Form } from "./components/form/Form";
import { LeftMenu } from "./components/leftmenu/LeftMenu";
import { ButtonMenu } from "./components/navbar/ButtonMenu";
import { NavBar } from "./components/navbar/NavBar";

export const MiPaqueteApp = () => {
  return (
    <div id="background-app">
      <div className="figure__background-app"></div>
      <ButtonMenu />
      <NavBar />
      <LeftMenu />
    </div>
  );
};
