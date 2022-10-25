import { count } from "console";
import { cartItemModel } from "../models/cartItemModel";
import Images from "./Images";
import boximage from "../img/bucket.png"
import { useContext, useEffect, useState } from "react";
import { EcommerceContext } from "../context/EcommerceProvider";
const CartItem=(props:cartItemModel)=>{


const { cartItems, setcartItems, setcartCuantity, cartCuantity } =
  useContext(EcommerceContext);




    return (
      <div>
        <div
          className=" col-12 d-flex row "
          style={{ height: "225px", margin: "10px", padding: "5px" }}
          id="producto${i}"
        >
          <div className=" col-11 d-flex row border rounded">
            <div className="col-3 imgfather d-flex justify-content-center align-items-center  ">
              <Images
                src={props.src}
                width={425}
                height={280}
                alt={""}
                Styles={"image rounded"}
              />
            </div>
            <div className="col-4" style={{ height: "10px" }}>
              <strong style={{ fontSize: "30px" }}>{props.name}</strong>
              <p></p>
            </div>
            <div className="col-2">
              <div>
                <div className="rounded border d-flex justify-content-center align-items-center" style={{ width: "15px",marginTop:"15px" }}>
                  {props.count}
                </div>
              </div>
            </div>
            <div
              className="col-2 d-flex"
              style={{ width: "3px", margin: "15px 0px 0px 15px" }}
            >
              <strong>
                {props.currency}
                {props.unitCost}
              </strong>
              <div
                className="col-1 imgfather"
                style={{ height: "40px", width: "40px" }}
              ></div>
            </div>
          </div>
          <div
            className="col-1 container d-flex justify-content-center align-items-center"
            id="buttondelette"
            onClick={() => {
              const array = [];
              cartItems.map((element) => {
                if (element.index === props.id) {
                  setcartCuantity(cartCuantity - element.count);
                } else {
                  array.push(element);
                }
              });
              setcartItems(array);
            }}
          >
            <div className="">
              <Images
                src={boximage}
                width={500}
                height={500}
                alt={""}
                Styles={"image"}
              />
            </div>
          </div>
          <p></p>
        </div>
      </div>
    );
}

export default CartItem;
