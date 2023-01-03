import { Button, Card } from "react-bootstrap";
import { cardindexmodel } from "../models/cardindexmodel";
import Images from "./Images";

const Cardindex=( props:cardindexmodel)=>{
return (
  
    <Card
      className="col-4 rounded"
      style={{ margin: "15px 15px 15px 15px",width:"400px",border:"1.5px solid grey",padding:"1px",boxShadow:"2px 5px 10px 1px grey" }}
       
    >
      <Images
        src={props.src}
        width={0}
        height={0}
        alt={""}
        Styles={"bd-placeholder-img card-img-top"}
      />{" "}
      <Card.Body>
        <Card.Title>{props.cuantity}</Card.Title>
        <Card.Text>{props.string}</Card.Text>
        <Button variant="primary">
          <a style={{ backgroundColor: "transparent",textDecoration:"none", color:"white" }} href="/categorias" >Mas Información</a>
        </Button>
      </Card.Body>
    </Card>
  
);
}
export default Cardindex