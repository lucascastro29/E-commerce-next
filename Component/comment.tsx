import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceProvider";
import { commentmodel } from "../models/commentmodel";

const Comment = (props:commentmodel)=>{
               

const { starts } = useContext(EcommerceContext);
  return (
    <div id="comment" className="border rounded" style={{ margin: "15px 0px 15px 0px" }}>
      <div style={{ margin: "15px" }}>
        <strong> {props.user}:</strong>
        <p>{props.description}</p>
      </div>
      <div className="row col-12">
        <div className="col-6" style={{ paddingLeft: "25px" }}>

      {starts(props.score)}
        </div>
        <div className="col-6 d-flex justify-content-end">
          <p >{props.dateTime}</p>
        </div>
      </div>
    </div>
  );
}
export default Comment;