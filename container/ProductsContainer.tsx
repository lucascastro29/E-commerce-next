import { useContext, useEffect, useState } from "react";
import ProductObject from "../Component/ProductObject";
import { EcommerceContext } from "../context/EcommerceProvider";


const ProductsContainer=()=>{



  

const [buscar, setbuscar] = useState("");

const {
  getJSONData,
  setminCount,
  setmaxCount,
  minCount,
  maxCount,
  sethookstart,
  ProductsHook,
  setProductsHook,
  PRODUCTS_URL,
  productsimages,
  ProductsHookInuse,
  setProductsHookInuse,
  sortProducts,
  flag,
  setflag,
  setflags,
  cartItems,
  setcartItems,
} = useContext(EcommerceContext);

const [ProductsHookInuses,setproductoss]=useState([])

useEffect(() => {
 setcartItems(cartItems)

  if (localStorage.getItem("products")===null) {
    getJSONData(PRODUCTS_URL).then((result) => {
      result.map(
        (element, index) => (element.imgSrc = productsimages[index].src)
      );

      setProductsHook(result);
      setProductsHookInuse(result);
    });
  }
  if (flag === "mincount") {
    (document.getElementById("rangeFilterCountMin")as HTMLInputElement).value = undefined;
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
  setproductoss(ProductsHookInuse);
}, [flag, minCount, maxCount, ProductsHookInuse]);

      return (
        <div className="body" style={{paddingBottom:"50px"}}>
          <div>
            <div className="text-center p-4 body">
              <h2
                style={{
                  fontSize: "40px",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                <strong>Productos</strong>
              </h2>
            </div>
            <div className="container ">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="Buscar"
                    className="form-control"
                    style={{ width: "100%" }}
                    id="buscar"
                    onChange={(event) => {
                      setbuscar(event.target.value.toLowerCase());
                    }}
                  />  
                </div>
              </div>

              <div
                className="col-12 d-flex align-items-center justify-content-center"
                style={{ color: "white" }}
              >
                <div
                  className="col-8 d-flex "
                  style={{ margin: "15px 0px 0px 0px" }}
                >
                  <div className="col-md-6">
                    <div className="col-12 d-flex">
                      <div style={{ color: "black", marginTop: "8px" }}>
                        <strong>Precio:</strong>
                      </div>
                      <div
                        className="btn-group btn-group-toggle mb-4"
                        data-toggle="buttons"
                      >
                        <label
                          className="btn btn-light "
                          id="sortAsc"
                          onClick={() => {
                            setflag("as");
                            sortProducts(1, ProductsHookInuse);
                          }}
                        >
                          <input
                            type="radio"
                            name="options"
                            autoComplete="off"
                          />
                          Desc
                        </label>
                        <label
                          className="btn btn-light"
                          id="sortDesc"
                          onClick={() => {
                            setflag("des");
                            sortProducts(2, ProductsHookInuse);
                          }}
                        >
                          <input
                            type="radio"
                            name="options"
                            autoComplete="off"
                          />
                          Ascen
                        </label>
                        <label
                          className="btn btn-light"
                          id="sortByCount"
                          onClick={() => {
                            setflag("cont");
                            sortProducts(3, ProductsHookInuse);
                          }}
                        >
                          <input
                            type="radio"
                            name="options"
                            autoComplete="off"
                          />
                          <i className="fas fa-sort-amount-down mr-1"></i>
                          Relevancia
                        </label>
                      </div>
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
                          className="form-control"
                          type="number"
                          min={0}
                          placeholder="máx."
                          id="rangeFilterCountMax"
                          onChange={(event) => {
                            console.log("max", event.target.value);
                            if (
                              event.target.value === "" ||
                              event.target.value === undefined
                            ) {
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
                              setbuscar(undefined);
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
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center align-items-center body"></div>
            <br />

            <div className="d-flex justify-content-center" >
              <div className="col-10 d-flex justify-content-center">
                <div
                  className="container col-12 d-flex row  border rounded"
                  style={{ minHeight: "80px", backgroundColor: "white" }}
                >
                  {ProductsHookInuses.map((element, index) => {
                   
  if (
    (minCount == undefined || element.cost >= minCount) &&
    (maxCount == undefined || element.cost <= maxCount) &&
    (buscar == undefined ||
      element.name.toLowerCase().includes(buscar) ||
      element.description.toLowerCase().includes(buscar))
  ) {
    return (
      <div
        key={index}
        className="col-lg-3 row border rounded container "
        style={{ margin: "15px", padding: "0px" }}
      >
        <a
          href={"producto/" + index}
          style={{ textDecoration: "none", color: "black", padding: "0px" }}
          className="hoverxd"
        >
          <ProductObject
            src={element.imgSrc}
            name={element.name}
            currency={element.currency}
            cost={element.cost}
            soldCount={element.soldCount}
            description={element.description}
          />
        </a>
      </div>
    );
  }

                    if (element.newobject){
                      if (
                      (minCount == undefined || element.cost >= minCount) &&
                      (maxCount == undefined || element.cost <= maxCount) &&
                      (buscar == undefined ||
                        element.name.toLowerCase().includes(buscar) ||
                        element.description.toLowerCase().includes(buscar))
                    ){

                      return (
                        <div
                          key={index}
                          className="col-lg-3 row border rounded container"
                          style={{ margin: "15px", padding: "0px" }}
                        >
                          <a
                            href={"producto/" + index}
                            style={{
                              textDecoration: "none",
                              color: "black",
                              padding: "0px",
                            }}
                          >
                            <img src={element.imgSrc} alt="asd" style={{height:"15px"}}/>
                            <div style={{ margin: "10px" }}>
                              <p>
                                <strong
                                  style={{
                                    fontSize: "20px",
                                    marginBottom: "0px",
                                  }}
                                >
                                  {element.name}
                                </strong>
                              </p>
                              <p style={{ margin: "0px" }}>
                                {element.description}
                              </p>
                            </div>
                            <p
                              className="border "
                              style={{
                                width: "100%",
                                height: "0px",
                                margin: "0px",
                              }}
                            ></p>
                            <div
                              className="col-12 d-flex "
                              style={{ margin: "10px" }}
                            >
                              <div className="col-10">
                                <p style={{ marginBottom: "0px" }}>
                                  <strong>{element.currency + " "}</strong>{" "}
                                  {element.cost}
                                </p>
                                <p style={{ marginBottom: "0px" }}>
                                  {element.soldCount + " "} vendidos
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      );}
                    }


                    
                  
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    ;
}  
  export default ProductsContainer;
