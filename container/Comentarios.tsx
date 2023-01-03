import { useContext, useEffect, useState } from "react";
import Comment from "../Component/comment";
import { EcommerceContext } from "../context/EcommerceProvider";

const Comentarios=()=>{
 
const { AddtoCart, getJSONData, PRODUCT_INFO_COMMENTS_URL, result, setresult } =
  useContext(EcommerceContext);

useEffect(() => {

 setresult(getJSONData(PRODUCT_INFO_COMMENTS_URL))
 console.log(result)

}, [result])



    return (<div className="col-12 d-flex justify-content-center align-items-center">
        {result.map((element,index)=>
     <Comment
            key={index}
              user={element.user}
              description={element.description}
              dateTime={element.dateTime}
              score={element.score}
            />
        )
    }</div>
    )
}

export default Comentarios;