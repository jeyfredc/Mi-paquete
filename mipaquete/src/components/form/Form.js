import React from "react";
import arrowbackorange from "../../assets/arrow_back-orange.svg";
import colombia from "../../assets/colombia.svg";
import whatsapp from "../../assets/whatsapp.svg";

export const Form = () => {
  return (
    <div className="container-section-desktop full-width">
      <div id="container-create-account__desktop-mode">
        <div id="create-account" className="desktop-mode">
          <div id="step-one-create-account" className="desktop-mode">
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
            <div className="body__steps-create-account desktop-mode">
              <div className="second-body__steps-create-account">
                <div className="container__body__steps-create-account">
                  <div className="container-top-bottom-or-side__steps-create-account">
                    <label className="container__input-all">
                      <span className="span__input-general">Nombre</span>
                      <label />
                      <div className="container__input-general">
                        <div className="content-top__input-general">
                          <input
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="Daniela"
                            value=""
                          />
                        </div>
                        <hr className="help-to-line" />
                      </div>
                      <div className="container-lines__input-general">
                        <div className=" "></div>
                      </div>
                      <div className="container-suggestions__input-general ">
                        <ul></ul>
                      </div>
                      <span className="annotation__input-general   "></span>
                      <span className="annotation__input-general error  "></span>
                    </label>
                    <label className="container__input-all">
                      <span className="span__input-general">Apellido</span>
                      <label />
                      <div className="container__input-general">
                        <div className="content-top__input-general">
                          <input
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="Mantilla"
                            value=""
                          />
                        </div>
                        <hr className="help-to-line" />
                      </div>
                      <div className="container-lines__input-general">
                        <div className=" "></div>
                      </div>
                      <div className="container-suggestions__input-general ">
                        <ul></ul>
                      </div>
                      <span className="annotation__input-general   "></span>
                      <span className="annotation__input-general error  "></span>
                    </label>
                  </div>
                  <div className="container-top-bottom-or-side__steps-create-account">
                    <label className="container__input-all  ">
                      <span className="span__input-general">
                        Correo Electrónico
                      </span>
                      <label />
                      <div className="container__input-general">
                        <div className="content-top__input-general">
                          <input
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="Dani.Mantilla@mipaquete.com"
                            value=""
                          />
                        </div>
                        <hr className="help-to-line" />
                      </div>
                      <div className="container-lines__input-general">
                        <div className=" "></div>
                      </div>
                      <div className="container-suggestions__input-general ">
                        <ul></ul>
                      </div>
                      <span className="annotation__input-general   "></span>
                      <span className="annotation__input-general error  "></span>
                    </label>
                    <label className="container__input-all">
                      <span className="span__input-general">Celular</span>
                      <label />
                      <div className="container__input-general">
                        <div className="content-top__input-general">
                          <img src={colombia} alt="" class=" " />
                          <input
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="  3101234567"
                            value=""
                          />
                          <div class="tooltip">
                            <img src={whatsapp} alt="icon tooltip" />
                            <div class="tooltip__content-overlay bottom-rigth">
                              <span class="tooltip__title value">
                                Notificaciones Whatsapp
                              </span>
                              <span class="tooltip__text value">
                                Por whatsapp podrías recibir notificaciones para
                                facilitar tu proceso de envíos.
                              </span>
                            </div>
                          </div>
                        </div>
                        <hr className="help-to-line" />
                      </div>
                      <div className="container-lines__input-general">
                        <div className=" "></div>
                      </div>
                      <div className="container-suggestions__input-general ">
                        <ul></ul>
                      </div>
                      <span className="annotation__input-general   "></span>
                      <span className="annotation__input-general error  "></span>
                    </label>
                  </div>
                  <div className="container-top-bottom-or-side__steps-create-account">
                    <label className="container__input-all  ">
                      <span className="span__input-general">Ciudad</span>
                      <label />
                      <div className="container__input-general">
                        <div className="content-top__input-general">
                          <input
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="MEDELLÍN"
                            value=""
                          />
                        </div>
                        <hr className="help-to-line" />
                      </div>
                      <div className="container-lines__input-general">
                        <div className=" "></div>
                      </div>
                      <div className="container-suggestions__input-general ">
                        <ul></ul>
                      </div>
                      <span className="annotation__input-general   "></span>
                      <span className="annotation__input-general error  "></span>
                    </label>
                    <label className="container__input-all  ">
                      <span className="span__input-general">
                        Dirección de recogida
                      </span>
                      <label />
                      <div className="container__input-general">
                        <div className="content-top__input-general">
                          <input
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="Carrera 25 A # 23 - 18"
                            value=""
                          />
                        </div>
                        <hr className="help-to-line" />
                      </div>
                      <div className="container-lines__input-general">
                        <div className=" "></div>
                      </div>
                      <div className="container-suggestions__input-general ">
                        <ul></ul>
                      </div>
                      <span className="annotation__input-general   "></span>
                      <span className="annotation__input-general error  "></span>
                    </label>
                  </div>
                  <div className="container-lines__input-general">
                    <div className=" "></div>
                  </div>
                  <div className="container-suggestions__input-general ">
                    <ul></ul>
                  </div>
                  <span className="annotation__input-general   "></span>
                  <span className="annotation__input-general error  "></span>
                </div>
              </div>
              <div className="container-buttons__steps-create-account desktop-mode">
                <button id="" className="button-primary   normal" type="button">
                  Continuar
                </button>
                <button
                  id=""
                  className="button-secondary   normal"
                  type="button"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
