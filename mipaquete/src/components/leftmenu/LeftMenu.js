import React from "react";
import support from "../../assets/Help.svg";

export const LeftMenu = () => {
  return (
    <div>
    <div id="left-side-menu" className="">
      <div className="left-side-menu-card  ">
        <div className="container-img__left-side-menu-card">
          {/* <img src="/static/media/Quote_Dark.2ca6a83b.svg" alt="Icon card" /> */}
        </div>
        <span>Cotiza tu envío</span>
      </div>
      <div className="left-side-menu-card  ">
        <div className="container-img__left-side-menu-card">
          <img
            src="/static/media/Delivery_Tracking_Dark.f11c01bf.svg"
            alt="Icon card"
          />
        </div>
        <span>Seguimiento de envíos</span>
      </div>
    </div>
      <div id="support-button-desktop" className="displayed">
        <img src={support} alt="support" />
        <span>  Centro de ayuda</span>
      </div>
    </div>
  );
};
