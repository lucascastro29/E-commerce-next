import { categoryinfomodel } from "../models/categoryinfomodel";
import Images from "./Images";

const Categoryinfoimage=(props:categoryinfomodel)=>{

    return (
      <div className="col-lg-3 col-md-4 col-6">
        <div className="d-block mb-4 h-100">
          <Images
            src={props.src}
            alt=" "
            width={0}
            height={0}
            Styles={"img-thumbnail"}
          />{" "}
        </div>
      </div>
    );
}

export default Categoryinfoimage