
import { EcommerceContext } from "../context/EcommerceProvider";
import { useContext, useEffect, useState } from "react";

import cat1 from "../img/cat1.jpg"
import car1 from "../img/car1.jpg";
import car2 from "../img/car2.jpg";
import car3 from "../img/car3.jpg";
import Categoryinfoimage from "../Component/categoryinfoimage";


const Categoryinfocontainer=()=>{

    const imagesGallery=[cat1,car1,car2,car3]


const { CATEGORY_INFO_URL, getJSONData, sethookstart } =
  useContext(EcommerceContext);

var category = {};


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

useEffect(()=>{
  sethookstart("2");

    getJSONData(CATEGORY_INFO_URL).then(function (result) {
      let category = result;

      let categoryNameHTML = document.getElementById("categoryName");
      let categoryDescriptionHTML = document.getElementById(
        "categoryDescription"
      );
      let productCountHTML = document.getElementById("productCount");
      let productCriteriaHTML = document.getElementById("productCriteria");

      categoryNameHTML.innerHTML = category.name;
      categoryDescriptionHTML.innerHTML = category.description;
      productCountHTML.innerHTML = category.productCount;
      productCriteriaHTML.innerHTML = category.productCriteria;

      //Muestro las imagenes en forma de galería
    });
},[])
  


return (
  <div className="col-12 body" style={{paddingBottom:"30px"}}>
    <div id="divproducts" className="body" style={{ color: "black" }}>
      <div id="" className="container ">
        <div className="text-center p-4">
          <h2 style={{ fontSize: "40px", marginTop: "40PX" }}>
            <strong>Descripción de la categoría</strong>
          </h2>
          <br />
          <p className="small alert-warning py-3 border rounded">
            <strong>Nota: </strong>por simplicidad, cualquiera sea la categoría
            seleccionada previamente, siempre se visualizará la presente:{" "}
            <strong>Autos</strong>.
          </p>
        </div>
        <h3 id="categoryName"></h3>
        <div
          className="border rounded"
          style={{
            backgroundColor: "white",
            color: "black",
            marginBottom: "30px",
            padding: "15px",
          }}
        >
          <dl color="black">
            <dt>Descripción</dt>
            <dd>
              <p id="categoryDescription"></p>
            </dd>

            <dt>Cantidad de productos en la categoría</dt>
            <dd>
              <p id="productCount"></p>
            </dd>

            <dt>Criterio para incluir productos en esta categoría</dt>
            <dd>
              <p id="productCriteria"></p>
            </dd>

            <dt>Imágenes ilustrativas</dt>
            <dd>
              <div
                className="row text-center text-lg-left pt-2"
                id="productImagesGallery"
              >
                {imagesGallery.map((element,index)=>(

                  <Categoryinfoimage key={index} src={element}/>
                ))}
              </div>
            </dd>
          </dl>
        </div>
        <a
          type="button"
          style={{ marginBottom: " 15px" }}
          className="btn btn-light btn-lg btn-block"
          href="/productos"
        >
        <strong>Ver productos</strong>
        </a>
      </div>
    </div>
  </div>
);
}

export default Categoryinfocontainer;