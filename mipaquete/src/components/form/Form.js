import React, { useState } from "react";
import arrowbackorange from "../../assets/arrow_back-orange.svg";
import colombia from "../../assets/colombia.svg";
import whatsapp from "../../assets/whatsapp.svg";
import FormPage2 from "./FormPage2";
import { HeaderForm } from "./HeaderForm";

export const Form = () => {

  const [datosForm, setDatosForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    ciudad: "",
    direccion: "",
    tipo_documento:"",
    nro_identificacion:"",
    tipo_persona:"",
    nombre_comercial:"",
    rango_envios:"",
  });

  const [hiden, setHiden] = useState(false)

  const handleInputChange = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name] : e.target.value
    })

  }

  const cleanForm = () => {
    setDatosForm({
      nombre: "",
      apellido: "",
      correo: "",
      celular: "",
      ciudad: "",
      direccion: "",
      tipo_documento:"",
      nro_identificacion:"",
      tipo_persona:"",
      nombre_comercial:"",
      rango_envios:"",
    })
  }


  const continueForm = () => {

    setHiden(true)
  } 

  console.log(datosForm)

  return (
    <div className="container-section-desktop full-width">
      <div id="container-create-account__desktop-mode">
        <div id="create-account" className="desktop-mode">
          {!hiden ? (
          <div id="step-one-create-account" className="desktop-mode">
            <HeaderForm/>
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
                            name="nombre"
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="Daniela"
                            value={datosForm.nombre}
                            onChange={handleInputChange}
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
                            name="apellido"
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="Mantilla"
                            value={datosForm.apellido}
                            onChange={handleInputChange}

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
                            name="correo"
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="Dani.Mantilla@mipaquete.com"
                            value={datosForm.correo}
                            onChange={handleInputChange}

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
                          <img src={colombia} alt="" className=" " />
                          <input
                            name="celular"
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="  3101234567"
                            value={datosForm.celular}
                            onChange={handleInputChange}

                          />
                          <div className="tooltip">
                            <img src={whatsapp} alt="icon tooltip" />
                            <div className="tooltip__content-overlay bottom-rigth">
                              <span className="tooltip__title value">
                                Notificaciones Whatsapp
                              </span>
                              <span className="tooltip__text value">
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
                            name="ciudad"
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="MEDELLÍN"
                            value={datosForm.ciudad}
                            onChange={handleInputChange}

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
                            name="direccion"
                            className="input-general"
                            accept=""
                            type="text"
                            placeholder="Carrera 25 A # 23 - 18"
                            value={datosForm.direccion}
                            onChange={handleInputChange}

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
                <button 
                id="" 
                className="button-primary   normal" 
                type="button"
                onClick={continueForm}
                >
                  Continuar
                </button>
                <button
                  id=""
                  className="button-secondary   normal"
                  type="button"
                  onClick={cleanForm}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
          ): 
            <FormPage2 
            datosForm={datosForm}
            handleInputChange={handleInputChange}/>
          }
        </div>
      </div>
    </div>
  );
};
