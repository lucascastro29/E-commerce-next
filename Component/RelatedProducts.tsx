import { useContext, useEffect, useState } from "react";
import { EcommerceContext } from "../context/EcommerceProvider";
import { relatedProductsmodel } from "../models/relatedProductsmodel";
import Images from "./Images";
import Related from "./Related";

const RelatedProducts=(props:relatedProductsmodel)=>{

const { PRODUCTS_URL, productsimages, getJSONData, related, setrelated } =useContext(EcommerceContext);
 


useEffect(() => {
  getJSONData(PRODUCTS_URL).then((result) => {
    const item = [
      { src: "", name: "",index:0, },
      { src: "", name: "",index:0, },
    ];
    result.map((element, index) => {
      if (index === props.related[0]) {
        item[0].src = productsimages[index].src;
        item[0].name = element.name;
        item[0].index=index
      }
      if (index === props.related[1]) {
        item[1].src = productsimages[index].src;
        item[1].name = element.name;
        item[1].index = index;

      }
    });
    setrelated(item)
    
  });
}, [related]);

return (
  <>
    {related.map((element, index) => (
        <Related key={index} idprod={element.index} name={element.name} src={element.src.src} />
    ))}
  </>
);

   
}

export default RelatedProducts;