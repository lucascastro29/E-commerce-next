import { useContext, useEffect, useState } from "react";
import ProductInfo from "../Component/ProductInfo";
import RelatedProducts from "../Component/RelatedProducts";
import { EcommerceContext } from "../context/EcommerceProvider";
import { ProductoContanermodel } from "../models/ProductoContanermodel";
import Comment from "../Component/comment";
import Related from "../Component/Related";
import { stringify } from "querystring";
import { off } from "process";
import { Button } from "react-bootstrap";

 const ProductoContaner = (props: ProductoContanermodel) => {

const [comments,setComments]=useState([])
const [stylestar1, setstylestar1] = useState("fa fa-star ");
const [stylestar2, setstylestar2] = useState("fa fa-star ");
const [stylestar3, setstylestar3] = useState("fa fa-star ");
const [stylestar4, setstylestar4] = useState("fa fa-star ");
const [stylestar5, setstylestar5] = useState("fa fa-star ");

const[scorestarts,setscores]=useState(0)

const {
  comentar,
  star,
  Starvar,
  getJSONData,
  arrayImagesProductsInfoCarrousel,
  productoAUsar,
  setproductoAUsar,
  PRODUCT_INFO_COMMENTS_URL,
  resulta,
  setresulta,
  flag,
  setflag,setflags,
  NameUser,
} = useContext(EcommerceContext);

const item = [
  { src: "", name: "", index: 0 },
  { src: "", name: "", index: 0 },
];

useEffect(() => {
        ;

  if (resulta[0] === 1) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then((result) => {
      setresulta(result);

    })
  }
      setComments(resulta);

  getJSONData("https://lucascastro29.github.io/JsonP" + props.path + "/").then(
    (resulto) => {
      resulto.images = arrayImagesProductsInfoCarrousel[props.path];
      setproductoAUsar(resulto);
    }
  )

    


}, [item,flag,resulta])

   return (
     <div
       className=" col-12 container d-flex justify-content-center align-items-center"
       style={{ width: "100%",paddingBottom:"45px" }}
     >
       <div
         className="col-10  rounded "
         style={{
           padding: "30px",
           marginTop: "40px",
           backgroundColor: "white",
         }}
       >
         <div className="col-12" >
           <ProductInfo
             name={productoAUsar.name}
             description={productoAUsar.description}
             cost={productoAUsar.cost}
             currency={productoAUsar.currency}
             soldCount={productoAUsar.soldCount}
             category={productoAUsar.category}
             images={productoAUsar.images}
             relatedProducts={productoAUsar.relatedProducts}
           />
         </div>

         <div
           className=" col-12 container d-flex"
           style={{ marginTop: "50px", padding: "0px" }}
         >
           <div id="comentar">
             <div
               className="container"
               style={{ padding: "0px", marginBottom: "35px" }}
             >
               <strong style={{ fontSize: "40px" }}>Comentarios</strong>
             </div>

             <div
               className="container col-12 d-flex"
               style={{ padding: "0px" }}
             >
               <div>
                 <textarea
                   id="textocoment"
                   style={{ height: "50px", width: "260px" }}
                 />
                 <div
                   className="container"
                   style={{ padding: "0px", margin: "0px 0px 10px 0px" }}
                 >
                   <span
                     className={"" + stylestar1}
                     id="stars1"
                     onClick={() => {
                       setstylestar1("fa fa-star orange");
                       setstylestar2("fa fa-star");
                       setstylestar3("fa fa-star");
                       setstylestar4("fa fa-star");
                       setstylestar5("fa fa-star");
                       setscores(1);
                     }}
                   ></span>
                   <span
                     className={"" + stylestar2}
                     id="star2"
                     onClick={() => {
                       setstylestar1("fa fa-star orange");
                       setstylestar2("fa fa-star orange");
                       setstylestar3("fa fa-star");
                       setstylestar4("fa fa-star");
                       setstylestar5("fa fa-star");
                       setscores(2);
                     }}
                   ></span>
                   <span
                     className={"" + stylestar3}
                     id="star3"
                     onClick={() => {
                       setstylestar1("fa fa-star orange");
                       setstylestar2("fa fa-star orange");
                       setstylestar3("fa fa-star orange");
                       setstylestar4("fa fa-star");
                       setstylestar5("fa fa-star");
                       setscores(3);
                     }}
                   ></span>
                   <span
                     className={"" + stylestar4}
                     id="star4"
                     onClick={() => {
                       setstylestar1("fa fa-star orange");
                       setstylestar2("fa fa-star orange");
                       setstylestar3("fa fa-star orange");
                       setstylestar4("fa fa-star orange");
                       setstylestar5("fa fa-star");
                       setscores(4);
                     }}
                   ></span>
                   <span
                     className={"" + stylestar5}
                     id="star5"
                     onClick={() => {
                       setstylestar1("fa fa-star orange");
                       setstylestar2("fa fa-star orange");
                       setstylestar3("fa fa-star orange");
                       setstylestar4("fa fa-star orange");
                       setstylestar5("fa fa-star orange");
                       setscores(5);
                     }}
                   ></span>
                 </div>
               </div>

               <Button
                 id="enviarcoment"
                 style={{ margin: "0px 0px 40px 15px" }}
                 onClick={() => {
                   let date = new Date();
                   comentar({
                     score: scorestarts,
                     description: (document.getElementById("textocoment")as HTMLInputElement).value,
                     user: NameUser,
                     dateTime:
                       "" +
                       date.getFullYear() +
                       "-" +
                       (date.getMonth() + 1) +
                       "-" +
                       date.getDate() +
                       " " +
                       date.getHours() +
                       ":" +
                       date.getMinutes() +
                       ":" +
                       date.getSeconds(),
                   });
                   (document.getElementById("textocoment")as HTMLInputElement).value = "";
                 }}
               >
                 comentar
               </Button>
             </div>

             <div id="comentarios">
               {comments.map((element, index) => (
                 <Comment
                   key={index}
                   user={element.user}
                   description={element.description}
                   dateTime={element.dateTime}
                   score={element.score}
                 />
               ))}
             </div>
           </div>
         </div>

         <div className="container col-12  justify-content-center align-items-center">
           <div className="col-12 d-flex justify-content-center align-items-center">
             <strong style={{fontSize:"35px",margin:"5px 0px 25px 0px"}}>Productos relacionados</strong>
           </div>

           <div className="col-12 row">
             <RelatedProducts related={productoAUsar.relatedProducts} />
           </div>
         </div>
       </div>

       <link
         rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
       />
     </div>
   );
 };

 export default ProductoContaner;