import { HeaderForm } from "./HeaderForm";
import Swal from 'sweetalert2'


const FormPage2 = ({ datosForm, handleInputChange }) => {

    const alertCapturaDatos = () => {
        Swal.fire({
            title: '<strong>Datos Capturados</strong>',
            icon: 'success',
            html:
            `<table>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo Electrónico</th>
              <th>Celular</th>
              <th>Ciudad</th>
              <th>Dirección de recodiga</th>
              <th>Tipo Documento</th>
              <th>Numero Identificación</th>
              <th>Tipo Persona</th>
              <th>Nombre Comercial</th>
              <th>Numero de Envios</th>


            </tr>
            <tr>
              <td>${datosForm.nombre}</td>
              <td>${datosForm.apellido}</td>
              <td>${datosForm.correo}</td>
              <td>${datosForm.celular}</td>
              <td>${datosForm.ciudad}</td>
              <td>${datosForm.direccion}</td>
              <td>${datosForm.tipo_documento}</td>
              <td>${datosForm.nro_identificacion}</td>
              <td>${datosForm.tipo_persona}</td>
              <td>${datosForm.nombre_comercial}</td>
              <td>${datosForm.rango_envios}</td>


            </tr>
          </table>`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              'Enviado!'
          })
    }


  return (
    <div id="step-one-create-account" className="desktop-mode">
      <HeaderForm />
      <div className="body__steps-create-account desktop-mode">
        <div className="second-body__steps-create-account">
          <div className="container__body__steps-create-account">
            <div className="container-top-bottom-or-side__steps-create-account">
              <label
                className="container__input-all  "
                style={{ marginLeft: "-2%" }}
              >
                <label />
                <div>
                  <select
                    name="tipo_documento"
                    className="containerSelect"
                    value={datosForm.tipo_documento}
                    onChange={handleInputChange}
                  >
                    <option value="NIT">NIT</option>
                    <option value="Cédula de ciudadanía">
                      Cédula de ciudadanía
                    </option>
                    <option value="Tarjeta de Identidad">
                      Tarjeta de Identidad
                    </option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Cédula de extranjería">
                      Cédula de extranjería
                    </option>
                  </select>
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
              <div className="container__input-all  ">
                <label className="container__input-all  ">
                  <span
                    className="
          span__input-general 
          
          
        "
                  >
                    Número de identificación*
                  </span>
                  <div
                    className="
          container__input-general  
        "
                  >
                    <div className="content-top__input-general">
                      <input
                        name="nro_identificacion"
                        className="input-general   "
                        accept=""
                        type="number-text"
                        placeholder="0123456789"
                        value={datosForm.nro_identificacion}
                        onChange={handleInputChange}
                      />
                    </div>
                    <hr className="help-to-line   " />
                  </div>
                  <div className="container-lines__input-general">
                    <div className=" "></div>
                  </div>
                  <div className="container-suggestions__input-general ">
                    <ul></ul>
                  </div>
                  <span className="annotation__input-general  visible ">
                    *'Escríbelos sin puntos, ni guíones y sin dígito de
                    verificación{" "}
                  </span>
                  <span className="annotation__input-general error  "></span>
                </label>
              </div>
            </div>
            <div className="container-top-bottom-or-side__steps-create-account">
              <label className="container__input-all  ">
                <span className="span__input-general_field">
                  Tipo de persona
                </span>
                <label />
                <div className="container-radio-buttons__step-two-create-account">
                  <label id="" className="radio-button ">
                    <input
                      name="tipo_persona"
                      type="radio"
                      value="Persona Natural"
                      onChange={handleInputChange}
                    />
                    <span className="checked">Persona Natural</span>
                  </label>
                  <span className="annotation__radio-button-general "></span>
                  <span className="annotation__radio-button-general error "></span>
                  <label id="" className="radio-button ">
                    <input
                      name="tipo_persona"
                      type="radio"
                      value="Persona Jurídica"
                      onChange={handleInputChange}
                    />
                    <span className="">Persona Jurídica</span>
                  </label>
                  <span className="annotation__radio-button-general "></span>
                  <span className="annotation__radio-button-general error "></span>
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
                <span
                  className="
          span__input-general 
          
          
        "
                >
                  Nombre comercial
                </span>
                <div
                  className="
          container__input-general  
        "
                >
                  <div className="content-top__input-general">
                    <input
                      name="nombre_comercial"
                      className="input-general   "
                      accept=""
                      type="text"
                      placeholder="Mairena"
                      value={datosForm.nombre_comercial}
                      onChange={handleInputChange}
                    />
                  </div>
                  <hr className="help-to-line   " />
                </div>
                <div className="container-lines__input-general">
                  <div className=" "></div>
                </div>
                <div className="container-suggestions__input-general ">
                  <ul></ul>
                </div>
                <span className="annotation__input-general  visible ">
                  *El nombre de tu tienda o comercio. Estará en el campo de
                  remitente de las guías que realices
                </span>
                <span className="annotation__input-general error  "></span>
              </label>
            </div>
            <div className="container-top-bottom-or-side__steps-create-account">
              <label
                className="container__input-all  "
                style={{ marginRight: "7%" }}
              >
                <label />
                <div>
                  <select
                    name="rango_envios" 
                    className="containerSelect_two"
                    value={datosForm.rango_envios} 
                    onChange={handleInputChange}
                  >
                    <option defaultValue>
                      ¿Actualmente cuántos envíos haces al mes?
                    </option>
                    <option value="1 a 30 envios">1 a 30 envios</option>
                    <option value="30 a 200 envios">30 a 200 envios</option>
                    <option value="200 a 500 envios">200 a 500 envios</option>
                    <option value="500 a 5.000 envios">500 a 5.000 envios</option>
                    <option value="mas de 5.000 envios">mas de 5.000 envios</option>
                  </select>
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
          </div>
        </div>
        <div className="container-buttons__steps-create-account desktop-mode">
          <button
            id=""
            className="button-primary   normal"
            type="button"
            onClick={alertCapturaDatos}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPage2;
