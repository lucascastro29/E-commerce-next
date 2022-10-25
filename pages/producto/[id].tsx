import { useContext } from "react";
import ProductoContaner from "../../container/ProductoContaner";
import { EcommerceContext } from "../../context/EcommerceProvider";
import { ProductModel } from "../../models/products";

const Product =(props)=>{


    console.log(props)


    return (
      <div className="body">
        <ProductoContaner path={props.post} />
      </div>
    );

}
export default Product; 
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
      { params: { id: "9" } },
      { params: { id: "10" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(paths) {
  return {
    // Passed to the page component as props
    props: { post: paths.params.id },
  };
}