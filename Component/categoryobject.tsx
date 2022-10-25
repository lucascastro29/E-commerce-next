import { categoryobjectmodel } from "../models/categoryobjectmodel";
import Images from "./Images";


const CategoryObject=( props:categoryobjectmodel)=>{


    return(
          
            <a href="/categoryinfo" className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-3">
                        <Images src={props.src} alt=" " width={0}
                    height={0} Styles={"img-thumbnail"}         />
        
        </div>
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between">
                            <h4 className="mb-1"> {props.name}
          </h4>
                            <small className="text-muted"> {props.Count+" "}
           artículos</small>
                        </div>
                        <p className="mb-1"> {props.description}
          </p>
                    </div>
                </div>
            </a>
            )
}

export default CategoryObject;