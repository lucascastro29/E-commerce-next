import { useContext, useEffect } from "react";
import { EcommerceContext } from "../context/EcommerceProvider";

const UsuarioContainer = () => {
  const {
   
    sethookstart,
  } = useContext(EcommerceContext);
  useEffect(() => {
    sethookstart("5");
  }, []);
  return (
    <div id="divproducts" className="body">
      <div id="mainxd" className="body">
        <div className="text-center p-4">
          <h2 style={{ color: "white" }}>Productos</h2>
        </div>

        <input
          type="search"
          placeholder="Buscar"
          className="form-control mr-sm-2"
          id="buscar"
        />

        <div className="xd border rounded" style={{ backgroundColor: "white" }}>
          <p style={{ margin: "5px 0px 5px 20px", width: "20%" }}>
            Ordenar por:
          </p>
          <div id="filtros">
            <button className="btn" id="Descendente">
              precios Desc
            </button>
            <button className="btn" id="Ascendente">
              precios Ascen
            </button>
            <button className="btn" id="Relevancia">
              Relevancia
            </button>
          </div>
          <div id="filtros">
            <p style={{ margin: "5px 5px 5px 0px;" }}>Precio:</p>
            <input
              type="number"
              placeholder="Mínimo"
              id="minimo"
              style={{ width: " 15%", margin: "5px" }}
            />
            <br />
            <input
              type="number"
              placeholder="Máximo"
              id="maximo"
              style={{ width: "15%", margin: "5px" }}
            />
          </div>
          <div id="filtros">
            <button className="btn" id="filtro">
              Filtrar
            </button>

            <button className="btn" id="limpiar">
              Limpiar
            </button>
          </div>
        </div>
        <br />

        <div
          className="d-flex justify-content-center border rounded"
          style={{ backgroundColor: "white" }}
        >
          <div
            id="mainproducts"
            className="row border rounded"
            style={{ height: "800px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default UsuarioContainer;
