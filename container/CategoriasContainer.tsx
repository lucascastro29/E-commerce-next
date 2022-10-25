import Image from "next/image";
import { eventNames } from "process";
import { useContext, useEffect, useState } from "react";
import CategoryObject from "../Component/categoryobject";
import { EcommerceContext } from "../context/EcommerceProvider";



const CategoriasContainer=()=>{


const [flag,setflag]=useState("")

const {
  getJSONData,
  CATEGORIES_URL,
  ORDER_ASC_BY_NAME,
  ORDER_DESC_BY_NAME,
  ORDER_BY_PROD_COUNT,
  setminCount,
  setmaxCount,
  minCount,
  maxCount,
  sethookstart,
  arrayimages,
  setcategoriesHook,
  sortCategories,
  categoriesHookInuses,
  setcategoriesHookInuses,
} = useContext(EcommerceContext);

useEffect(()=>{
  sethookstart("2");


    if (flag===""){
       getJSONData(CATEGORIES_URL).then((result) => {
         result.map(
           (element, index) => (element.imgSrc = arrayimages[index].src)
         );

         setcategoriesHook(result);
         setcategoriesHookInuses(result);

       })}else{

       }

if(flag==="mincount"){
  (document.getElementById("rangeFilterCountMin") as HTMLInputElement).value =
    undefined;
      (document.getElementById("rangeFilterCountMax")as HTMLInputElement).value = undefined;
}

if (flag === "mina") {
  if (minCount != undefined && minCount != "" && parseInt(minCount) >= 0) {
    setminCount(parseInt(minCount));
  } else {
    setminCount(undefined);
  }

  if (maxCount != undefined && maxCount != "" && parseInt(maxCount) >= 0) {
    setmaxCount(parseInt(maxCount));
  } else {
    setmaxCount(undefined);
  }
}
    
},[flag,minCount,maxCount])


return (
  <main id="divproducts" role="main" className="pb-5 body">
    <div style={{ color: "black" }} className="text-center p-4 body">
      <h2 style={{ fontSize: "40px", marginTop: "30px" }}>
        <strong>Categorías</strong>
      </h2>
      <p className="lead">
        <strong>Verás aquí todas las categorías del sitio.</strong>
      </p>
    </div>
    <div className="container body">
      <div className="row">
        <div className="col text-right"></div>
      </div>
      <div className="row justify-content-end" style={{ color: "white" }}>
        <div className="col-md-6">
          {" "}
          <div
            className="btn-group btn-group-toggle mb-4"
            data-toggle="buttons"
          >
            <label
              className="btn btn-light "
              id="sortAsc"
              onClick={() => {
                setflag("as");
                sortCategories(ORDER_ASC_BY_NAME, categoriesHookInuses);
              }}
            >
              <input type="radio" name="options" autoComplete="off" />
              A-Z
            </label>
            <label
              className="btn btn-light"
              id="sortDesc"
              onClick={() => {
                setflag("des");
                sortCategories(ORDER_DESC_BY_NAME, categoriesHookInuses);
              }}
            >
              <input type="radio" name="options" autoComplete="off" />
              Z-A
            </label>
            <label
              className="btn btn-light"
              id="sortByCount"
              onClick={() => {
                setflag("cont");
                sortCategories(ORDER_BY_PROD_COUNT, categoriesHookInuses);
              }}
            >
              <input type="radio" name="options" autoComplete="off" />
              <i className="fas fa-sort-amount-down mr-1"></i>Cant.
            </label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-1 container">
          <div className="row container p-0 m-0">
            <div className="col"></div>
            <div className="col">
              <input
                className="form-control"
                type="number"
                placeholder="min."
                min={0}
                id="rangeFilterCountMin"
                onChange={(event) => {
                  console.log("min", event.target.value);
                  if (
                    event.target.value === "" ||
                    event.target.value === undefined
                  ) {
                    setminCount(0);
                  } else {
                    setminCount(parseInt(event.target.value));
                  }
                  setflag("min");
                }}
              />
            </div>
            <div className="col">
              <input
                min={0}
                className="form-control"
                type="number"
                placeholder="máx."
                id="rangeFilterCountMax"
                onChange={(event) => {
                  
                  console.log("max", event.target.value);  
                  if (event.target.value === ""||event.target.value===undefined) {
                    setmaxCount(1000000);
                  } else {
                    setmaxCount(parseInt(event.target.value));
                  }
                  setflag("max");
                
                
                               
                }}
              />
            </div>
            <div className="col-3 p-0">
              <div className="btn-group" role="group">
                <button
                  className="btn btn-light btn-block"
                  id="rangeFilterCount"
                  onClick={() => {
                    setflag("mina");
                    console.log(minCount, maxCount);
                    
                  }}
                >
                  Filtrar
                </button>
                <button
                  className="btn btn-link btn-sm"
                  id="clearRangeFilter"
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => {
                    setminCount(undefined);
                    setmaxCount(undefined);
                    setflag("mincount");
                  }}
                >
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="list-group">
          <div id="cat-list-container">
            {categoriesHookInuses.map((element, index) => {
              if (
                (minCount == undefined ||
                  (minCount !== undefined &&
                    element.productCount >= minCount)) &&
                (maxCount == undefined ||
                  (maxCount != undefined &&
                    element.productCount <= maxCount))
              ) {
                return (
                  <CategoryObject
                    key={index}
                    src={element.imgSrc}
                    name={element.name}
                    Count={element.productCount}
                    description={element.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  </main>
);
}
export default CategoriasContainer;
