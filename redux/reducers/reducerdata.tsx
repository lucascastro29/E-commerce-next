import Image from 'next/image'

import imgcat1 from "../../img/cat1.jpg"
import imgcat2 from "../../img/cat2.jpg";
import imgcat3 from "../../img/cat3.jpg";
import imgcat4 from "../../img/cat4.jpg";
import imgcat5 from "../../img/cat5.jpg";
import imgcat6 from "../../img/cat6.jpg";
import imgcat7 from "../../img/cat7.jpg";
import imgcat8 from "../../img/cat8.jpg";
import imgcat9 from "../../img/cat9.jpg";






import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Text: "hola",
  Headers: [
    { href: "/cursos", content: "CURSOS", type: "no desplegable", items: [] },
    {
      href: "/equipos",
      content: "EQUIPOS",
      type: "desplegable",
      items: [{ tipo: "" }],
    },
    {
      href: "/aventuras",
      content: "AVENTURAS",
      type: "no desplegable",
      items: [],
    },
    { href: "/eventos", content: "EVENTOS", type: "desplegable", items: [] },
    { href: "/galeria", content: "GALERIA", type: "no desplegable", items: [] },
    {
      href: "/nosotros",
      content: "NOSOTROS",
      type: "no desplegable",
      items: [],
    },
  ],
  cardindex: [
    {
      src: imgcat1,
      string: "Los mejores precios en autos 0 kilómetro, de alta y media gama.",
      cuantity: "Autos (122)",
    },
    {
      src: imgcat2,
      string:
        "Encuentra aquí los mejores precios para niños/as de cualquier edad.",
      cuantity: "Juguetes (354)",
    },
    {
      src: imgcat3,
      string: "Muebles antiguos, nuevos y para ser armados por uno mismo.",
      cuantity: "Muebles (157)",
    },
    {
      src: imgcat4,
      string: "Herramientas para cualquier tipo de trabajo.",
      cuantity: "Herramientas (452)",
    },
    {
      src: imgcat5,
      string: "Todo en cuanto a computadoras, para uso de oficina y/o juegos.",
      cuantity: "Computadoras (724)",
    },
    {
      src: imgcat6,
      string: "Gran variedad de ropa, nueva y de segunda mano.",
      cuantity: "Vestimenta (841)",
    },
  ],
  categoriesImg: [
    {
      name: "Autos",
      description:
        "Los mejores precios en autos 0 kilómetro, de alta y media gama.",
      productCount: "122",
      imgSrc: imgcat1,
    },
    {
      name: "Juguetes",
      description:
        "Encuentra aquí los mejores precios para niños/as de cualquier edad.",
      productCount: "354",
      imgSrc: imgcat2,
    },
    {
      name: "Muebles",
      description: "Muebles antiguos, nuevos y para ser armados por uno mismo.",
      productCount: "157",
      imgSrc: imgcat3,
    },
    {
      name: "Herramientas",
      description: "Herramientas para cualquier tipo de trabajo.",
      productCount: "452",
      imgSrc: imgcat4,
    },
    {
      name: "Computadoras",
      description:
        "Todo en cuanto a computadoras, para uso de oficina y/o juegos.",
      productCount: "724",
      imgSrc: imgcat5,
    },
    {
      name: "Vestimenta",
      description: "Gran variedad de ropa, nueva y de segunda mano.",
      productCount: "841",
      imgSrc: imgcat6,
    },
    {
      name: "Electrodomésticos",
      description: "Todos los electrodomésticos modernos y de bajo consumo.",
      productCount: "84",
      imgSrc: imgcat7,
    },
    {
      name: "Deporte",
      description:
        "Toda la variedad de indumentaria para todo tipo de deporte.",
      productCount: "574",
      imgSrc: imgcat8,
    },
    {
      name: "Celulares",
      description: "Celulares de todo tipo para cubrir todas las necesidades.",
      productCount: "124",
      imgSrc: imgcat9,
    },
  ],
  navitems: [
    {
      text: "Inicio",
      href: "/",
      id: "hooknav1",
      number: 1,
    },
    {
      text: "Categorias",
      href: "/categorias",
      id: "hooknav2",
      number: 2,
    },
    {
      text: "Productos",
      href: "/productos",
      id: "hooknav3",
      number: 3,
    },
    {
      text: "Vender",
      href: "/vender",
      id: "hooknav4",
      number: 4,
    },
  ],
  categoryItems: [
    {
      name: "Autos",
      description:
        "Los mejores precios en autos 0 kilómetro, de alta y media gama.",
      productCount: "122",
      imgSrc: imgcat1,
    },
    {
      name: "Juguetes",
      description:
        "Encuentra aquí los mejores precios para niños/as de cualquier edad.",
      productCount: "354",
      imgSrc: imgcat2,
    },
    {
      name: "Muebles",
      description: "Muebles antiguos, nuevos y para ser armados por uno mismo.",
      productCount: "157",
      imgSrc: imgcat3,
    },
    {
      name: "Herramientas",
      description: "Herramientas para cualquier tipo de trabajo.",
      productCount: "452",
      imgSrc: imgcat4,
    },
    {
      name: "Computadoras",
      description:
        "Todo en cuanto a computadoras, para uso de oficina y/o juegos.",
      productCount: "724",
      imgSrc: imgcat5,
    },
    {
      name: "Vestimenta",
      description: "Gran variedad de ropa, nueva y de segunda mano.",
      productCount: "841",
      imgSrc: imgcat6,
    },
    {
      name: "Electrodomésticos",
      description: "Todos los electrodomésticos modernos y de bajo consumo.",
      productCount: "84",
      imgSrc: imgcat7,
    },
    {
      name: "Deporte",
      description:
        "Toda la variedad de indumentaria para todo tipo de deporte.",
      productCount: "574",
      imgSrc: imgcat8,
    },
    {
      name: "Celulares",
      description: "Celulares de todo tipo para cubrir todas las necesidades.",
      productCount: "124",
      imgSrc: imgcat9,
    },
  ],
};


 export const reducerdata= createSlice({

    name:'data',
    initialState:initialState,
    reducers:{
        setdata:(state,action)=>{
            state.Text = action.payload.Text;
        },
        unsetdata:(state)=>{
            state.Text=""
        }
    }
})

export const {setdata,unsetdata}=reducerdata.actions;

export default reducerdata.reducer

