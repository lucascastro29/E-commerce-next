import { stringify } from "querystring";
import { useContext, useEffect, useState } from "react";
import { Carousel,Button } from "react-bootstrap";
import { EcommerceContext } from "../context/EcommerceProvider";
import { productinfomodel } from "../models/productinfomodel"
import { useLocalStorage } from "../useLocalStorage";
import Images from "./Images"

const ProductInfo=(props:productinfomodel)=>{

  
const {
  AddtoCart,
  cartItems,
  setcartCuantity,
  cartCuantity,

  setcartItems,
  flags,
  setflags,
} = useContext(EcommerceContext);


useEffect(()=>{
if(cartItems && flags=="pain"){
  setflags("")
}

},[])
    return (
      <>
        <div className="text-center " style={{ margin: "10px" }}>
          <strong style={{ fontSize: "40px" }}>{props.name}</strong>
        </div>
        <div className="col-12">
          <div className="container">
            <Carousel fade style={{ zIndex: "0" }}>
              <Carousel.Item
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Images
                  src={props.images[0].src}
                  width={800}
                  height={500}
                  alt={""}
                  Styles={"image border rounded"}
                />
              </Carousel.Item>
              <Carousel.Item
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Images
                  src={props.images[1].src}
                  width={800}
                  height={500}
                  alt={""}
                  Styles={"image border rounded"}
                />
              </Carousel.Item>
              <Carousel.Item
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                id="carousel"
              >
                <Images
                  src={props.images[2].src}
                  width={800}
                  height={500}
                  alt={""}
                  Styles={"image border rounded"}
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div>
            <p style={{ fontSize: "25px", marginTop: "40px" }}>
              {props.description}
            </p>

            <div className="col-12  d-flex">
              <div className="col-10" style={{ fontSize: "30px" }}>
                <p style={{ fontSize: "25px", margin: "0px" }}>
                  {props.soldCount} vendidos
                </p>
                <strong> ${props.currency}</strong> {props.cost}
              </div>
              <Button
                style={{ margin: "5px" }}
                onClick={() => {
                  if (flags == "") {
                    setflags("pain");
                    setcartItems(
                      cartItems.concat({
                        name: props.name,
                        description: props.description,
                        cost: props.cost,
                        currency: props.currency,
                        soldCount: props.soldCount,
                        category: props.category,
                        images: props.images,
                        relatedProducts: props.relatedProducts,
                        index: cartItems.length,
                        count: 1,
                      })
                    );
                  } else {
                    cartItems.map((element) => {
                      if (element.name == props.name) {
                        element.count += 1;
                      }
                    });
                    setcartItems(cartItems);
                  }
                  setcartCuantity(cartCuantity + 1);
                }}
              >
                Agregar al Carrito
              </Button>
            </div>
          </div>
        </div>
      </>
    );
}

export default ProductInfo