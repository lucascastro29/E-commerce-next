import Image from 'next/image'
import React from "react";
import { Imagesmodel } from '../models/Imagesmodel';
import styles from "../styles/Home.module.css";

const Images=(props:Imagesmodel)=>{

    return (
      <Image
        src={props.src}
        height={props.height}
        width={props.width}
        alt={props.alt}
        className={""+ props.Styles}
      />
    );
}

export default Images;