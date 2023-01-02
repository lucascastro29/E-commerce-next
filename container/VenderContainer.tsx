import { useContext, useEffect, useState } from "react";
import { EcommerceContext } from "../context/EcommerceProvider";
import { useLocalStorage } from "../useLocalStorage";

const VenderContainer = () => {
  const {
    newItems,
    setnewItems,
    sethookstart,
    setflag,
    cartItems,
    ProductsHookInuse,
    arrayimages,
    setProductsHookInuse,
  
  } = useContext(EcommerceContext);
const [totalCost, setTotalCost] = useState<any>(0);
const[kindOfPublication,setkindOfPublication]=useState("-")
const [cost, setcost] = useState<any>(0);
     const [file, setFile] = useState(null)

  useEffect(() => {
    sethookstart("4");

    console.log(cartItems); 



  }, []);

  return (
    <div id="divproducts" className="body" style={{paddingBottom:"35px"}}>
      <div className="container">
        <div className="text-center col-12 p-4">
          <strong
            className=" container row text-center"
            style={{ fontSize: "40px", width: "100%" }}
          >
            <p>Vender</p>
          </strong>
          <strong className="lead">
            Ingresa los datos del artículo a vender.
          </strong>
        </div>
        <div
          className="row justify-content-md-center border rounded"
          style={{
            color: "black",
            backgroundColor: "white",
            marginBottom: "15px",
            padding: " 15px",
          }}
        >
          <div className="col-md-10 order-md-1">
            <h4 className="mb-3">Información del producto</h4>
            <form className="needs-validation" id="sell-info">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="productName">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    required
                    placeholder="Nombre del producto"
                  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="zip">Imagen</label>
                <div className="col-md-8 order-md-1">
                  <input
                    type="text"
                    id="imageid"
                    placeholder="inserta el link de la imagen"
                  ></input>
                 
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="productDescription">Descripción</label>
                  <textarea
                    className="form-control"
                    id="productDescription"
                    rows={3}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Costo</label>
                  <input
                    type="number"
                    className="form-control"
                    id="productCostInput"
                    placeholder=""
                    required
                    min="0"
                    onChange={() =>{
                      setcost((document.getElementById("productCostInput") as HTMLInputElement).value)
                      setTotalCost(totalCost)}
                    }
                  />
                  <div className="invalid-feedback">
                    El costo debe ser mayor que 0.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">Moneda</label>
                  <select
                    className="custom-select d-block w-100"
                    id="productCurrency"
                    required
                  >
                    <option selected>Pesos Uruguayos (UYU)</option>
                    <option>Dólares (USD)</option>
                  </select>
                  <div className="invalid-feedback">
                    Ingresa una categoría válida.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7 mb-3">
                  <label htmlFor="state">Categoría</label>
                  <select
                    className="custom-select d-block w-100"
                    id="productCategory"
                  >
                    <option value="">Elija la categoría...</option>
                    <option>Autos</option>
                    <option>Juguetes</option>
                    <option>Muebles</option>
                    <option>Herramientas</option>
                    <option>Computadoras</option>
                    <option>Vestimenta</option>
                  </select>
                  <div className="invalid-feedback">
                    Por favor ingresa una categoría válida.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="productCountInput">Cantidad en stock</label>
                  <input
                    type="number"
                    className="form-control"
                    id="productCountInput"
                    placeholder=""
                    required
                    min="0"
                  />
                  <div className="invalid-feedback">
                    La cantidad es requerida.
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
              <h5 className="mb-3">Tipo de publicación</h5>
              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="goldradio"
                    name="publicationType"
                    type="radio"
                    className="custom-control-input"
                    onClick={() => {
                      setkindOfPublication("13%");
                      setTotalCost(cost * 1.13);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="goldradio"
                    onClick={() => {
                      setkindOfPublication("13%");
                      setTotalCost(cost * 1.13);
                    }}
                  >
                    Gold (13%)
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="premiumradio"
                    name="publicationType"
                    type="radio"
                    className="custom-control-input"
                    required
                    onClick={() => {
                      setkindOfPublication("7%");
                      setTotalCost(cost * 1.07);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="premiumradio"
                    onClick={() => {
                      setkindOfPublication("7%");
                      setTotalCost(cost * 1.07);
                    }}
                  >
                    Premium (7%)
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="standardradio"
                    name="publicationType"
                    type="radio"
                    className="custom-control-input"
                    required
                    onClick={() => {
                      setkindOfPublication("3%");
                      setTotalCost(cost * 1.03);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="standardradio"
                    onClick={() => {
                      setkindOfPublication("3%");
                      setTotalCost(cost * 1.03);
                    }}
                  >
                    Estándar (3%)
                  </label>
                </div>
                <div className="row">
                  <button
                    type="button"
                    className="m-1 btn btn-link"
                    data-toggle="modal"
                    data-target="#contidionsModal"
                  >
                    Ver condiciones
                  </button>
                </div>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Costos</h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Precio</h6>
                    <small className="text-muted">Unitario del producto</small>
                  </div>
                  <span className="text-muted" id="productCostText">
                    {cost}
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Porcentaje</h6>
                    <small className="text-muted">
                      Según el tipo de publicación
                    </small>
                  </div>
                  <span className="text-muted" id="comissionText">
                    {kindOfPublication}
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total ($)</span>
                  <strong id="totalCostText">{totalCost}</strong>
                </li>
              </ul>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  const product = {
                    name: (
                      document.getElementById("productName") as HTMLInputElement
                    ).value,
                    cost: totalCost,
                    description: (
                      document.getElementById(
                        "productDescription"
                      ) as HTMLInputElement
                    ).value,
                    imgSrc:
                      "" +
                      (document.getElementById("imageid") as HTMLInputElement)
                        .value,
                    soldCount: (
                      document.getElementById(
                        "productCountInput"
                      ) as HTMLInputElement
                    ).value,
                    newobject: "1",
                  };
                  setflag("as");

                  if (
                    product.name != "" &&
                    product.cost != null &&
                    product.description != "" &&
                    product.imgSrc != "" &&
                    product.soldCount != ""
                  ) {
                      
                    alert(
                      "Producto agregado"
                    );
                  } else {
                    alert(
                      "tienes que rellenar toda la información para publicar un producto"
                    );
                  }
                }}
              >
                Vender
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VenderContainer;
