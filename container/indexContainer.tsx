
import styles from '../styles/Home.module.css'
import React, { useContext, useEffect } from 'react'

import Cardindex from '../Component/cardindex'

import {
  useDispatch,
  useSelector,
} from "../node_modules/react-redux/es/exports";
import { EcommerceContext } from '../context/EcommerceProvider';
import Link from 'next/link';
import { Button } from 'react-bootstrap';


const IndexContainer=()=>{
 const dispatch = useDispatch();
 
 const { cardindex } = useSelector((state: { data: any }) => state.data);
     {console.log(cardindex);}


const {
  sethookstart,
} = useContext(EcommerceContext);

useEffect(() => {
          sethookstart("1");
  },[]);

     
  return (
    <div className="col-12 d-flex justify-content-center align-items-center body">
      <div className="col-12 " style={{ marginTop: "25px" }}>
        <div style={{ color: "black" }} className="text-center p-4 body">
          <h2 style={{ fontSize: "40px"}}>
            <strong>Categorías</strong>
          </h2>
          
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="col-12 container row ">
            {cardindex.map((element, index) => (
              <Cardindex
                key={index}
                src={element.src}
                string={element.string}
                cuantity={element.cuantity}
              />
            ))}
          </div>
        </div>

        <div
          className="col-12 d-flex justify-content-center align-items-center "
          style={{ margin: "40px 0px 40px 0px" }}
        >
          <Link
            type="button"
            className="btn btn-light btn-lg btn-block col-8"
            href="/categorias"
          >
            <Button
              type="button"
              className="btn btn-light btn-lg btn-block col-6"
              href="/categorias"
            >
              <strong>Ver todas</strong>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

}

export default IndexContainer;