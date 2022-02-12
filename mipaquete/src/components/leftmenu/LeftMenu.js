import React from "react";

export const LeftMenu = () => {
  return (
    <div id="left-side-menu" className="hidden" >
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
  );
};
