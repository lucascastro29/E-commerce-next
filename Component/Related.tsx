import Link from "next/link";
import { propTypes } from "react-bootstrap/esm/Image";
import { relatedmodel } from "../models/relatedmodel";
import Images from "./Images";

const Related=(props:relatedmodel)=>{


    return (
      <Link href={"/producto/" + props.idprod + ""}>
        <div className="col-4  container" style={{ padding: "0px" }}>
          <p className="texta"
           
          >
            <strong>{props.name}</strong>
          </p>
          <div >
            <img
              src={props.src}
              alt={""}
              className="imagerelated rounded"
            />
          </div>
        </div>
      </Link>
    );
}

export default Related;