import Link from "next/link";
import { Button } from "react-bootstrap";
import { productobjectmodel } from "../models/productobjectmodel";
import Images from "./Images";

 const ProductObject=(props:productobjectmodel)=>{

    return (
      <>
        <Images
          src={props.src}
          alt=" "
          width={0}
          height={0}
          Styles={" rounded"}
        />
        <div style={{ margin: "10px" }}>
          <p>
            <strong style={{ fontSize: "20px", marginBottom: "0px" }}>
              {props.name}
            </strong>
          </p>
          <p style={{ margin: "0px" }}>{props.description}</p>
        </div>
        <p
          className="border "
          style={{ width: "100%", height: "0px", margin: "0px" }}
        ></p>
        <div className="col-12 d-flex " style={{ margin: "10px" }}>
          <div className="col-10">
            <p style={{ marginBottom: "0px" }}>
              <strong>{props.currency + " "}</strong> {props.cost}
            </p>
            <p style={{ marginBottom: "0px" }}>
              {props.soldCount + " "} vendidos
            </p>
          </div>
        </div>
      </>
    );
 }

 export default ProductObject