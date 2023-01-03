import React, { createContext, useState } from "react";
import { ProductModel } from "../models/products";
import imgcat1 from "../img/cat1.jpg";
import imgcat2 from "../img/cat2.jpg";
import imgcat3 from "../img/cat3.jpg";
import imgcat4 from "../img/cat4.jpg";
import imgcat5 from "../img/cat5.jpg";
import imgcat6 from "../img/cat6.jpg";
import imgcat7 from "../img/cat7.jpg";
import imgcat8 from "../img/cat8.jpg";
import imgcat9 from "../img/cat9.jpg";
import imgprod1 from "../img/prod1.jpg";
import imgprod2 from "../img/prod2.jpg";
import imgprod3 from "../img/prod3.jpg";
import imgprod4 from "../img/prod4.jpg";

import imgprod1_1 from "../img/prod1_1.jpg";
import imgprod1_2 from "../img/prod1_2.jpg";


import imgprod2_1 from "../img/prod2_1.jpg";
import imgprod2_2 from "../img/prod2_2.jpg";


import imgprod3_1 from "../img/prod3_1.jpg";
import imgprod3_2 from "../img/prod3_2.jpg";

import imgprod4_1 from "../img/prod4_1.jpg";
import imgprod4_2 from "../img/prod4_2.jpg";
import { useLocalStorage } from "../useLocalStorage";



const arrayImagesProductsInfoCarrousel = [
  [imgprod1, imgprod1_1, imgprod1_2],
  [imgprod2, imgprod2_1, imgprod2_2],
  [imgprod3, imgprod3_1, imgprod3_2],
  [imgprod4, imgprod4_1, imgprod4_2],
];

const arrayimages = [
  {src:imgcat1,},
{  src:imgcat2,
},  {src:imgcat3,},
 { src:imgcat4,},
{  src:imgcat5,
},  {src:imgcat6},
  {src:imgcat7},
 {src: imgcat8},
 {src: imgcat9}
];

const productsimages = [{ src: imgprod1 }, {src:imgprod2}, {src:imgprod3}, {src:imgprod4}];


export const EcommerceContext = createContext(null);


export const EcommerceProvider = ({ children }) => {

const [productoAUsar, setproductoAUsar] = useState({
  category: "",
  cost: "",
  currency: "",
  description: "",
  images: [{ src: "" }, { src: "" }, { src: "" }],
  name: "",
  relatedProducts: [ ],
  soldCount: "",
});

 const [ProductsHook, setProductsHook] = useState([]);
 const [ProductsHookInuse, setProductsHookInuse] = useLocalStorage("products",[]);

 const [newProductsHookInuse, setnewProductsHookInuse] = useLocalStorage(
   "newproducts",
   []
 );



 

  const ORDER_ASC_BY_NAME = "AZ";
  const ORDER_DESC_BY_NAME = "ZA";
  const ORDER_BY_PROD_COUNT = "Cant.";
  var currentCategoriesArray = [];
  const [minCount, setminCount] = useState(undefined);
  const [maxCount, setmaxCount] = useState(undefined);

const [loginhook,setloginhook]=useState("login")

  const CATEGORIES_URL =
    "https://japdevdep.github.io/ecommerce-api/category/all.json";
  const PUBLISH_PRODUCT_URL =
    "https://japdevdep.github.io/ecommerce-api/product/publish.json";
  const CATEGORY_INFO_URL =
    "https://japdevdep.github.io/ecommerce-api/category/1234.json";
  const PRODUCTS_URL =
    "https://japdevdep.github.io/ecommerce-api/product/all.json";
  const PRODUCT_INFO_URL = "https://lucascastro29.github.io/JsonP";
  const PRODUCT_INFO_COMMENTS_URL =
    "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
  const CART_INFO_URL =
    " https://japdevdep.github.io/ecommerce-api/cart/654.json";
  const CART_BUY_URL =
    "https://japdevdep.github.io/ecommerce-api/cart/buy.json";



 
  var getJSONData = async function (url) {
    try {
      let fetchs = await fetch(url);
      let result = await fetchs.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  function sortCategories(criteria, array) {
    const newarray = array;
    console.log(array);

    let result = [];
    if (criteria === ORDER_ASC_BY_NAME) {
      result = newarray.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else if (criteria === ORDER_DESC_BY_NAME) {
      result = newarray.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    } else if (criteria === ORDER_BY_PROD_COUNT) {
      result = newarray.sort(function (a, b) {
        let aCount = parseInt(a.productCount);
        let bCount = parseInt(b.productCount);

        if (aCount > bCount) {
          return -1;
        }
        if (aCount < bCount) {
          return 1;
        }
        return 0;
      });
    }
setcategoriesHookInuses(result)
  }
  
    const [categoriesHook, setcategoriesHook] = useState<any>([]);

  const [categoriesHookInuses, setcategoriesHookInuses] = useState([]);



  function showCategoriesList(category,minCount,maxCount) {
    let resultArray = [];
    for (let i = 0; i < category.length; i++) {
      if (
        (minCount == undefined ||
          (minCount != undefined &&
            parseInt(category[i].productCount) >= minCount)) &&
        (maxCount == undefined ||
          (maxCount != undefined &&
            parseInt(category[i].productCount) <= maxCount))
      ) {resultArray.push(category[i])
      }
   
    }   setcategoriesHookInuses(resultArray);
    }

  var showSpinner = function () {
    document.getElementById("spinner-wrapper").style.display = "block";
  };

  var hideSpinner = function () {
    document.getElementById("spinner-wrapper").style.display = "none";
  };
  ////////////////////




 const [minp, setminp] = useState(undefined)
  const [maxp,setmaxp] = useState(undefined);
  const [buscar,setbuscar] = useState(undefined);

  //funcion para mostrar el array en cuestión y con sus correspondientes if para el buscador y los filtros
  function showproducts(array) {
    console.log(array)
    let content = "";
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      
      if (
        (minp == undefined || element.cost >= minp) &&
        (maxp == undefined || element.cost <= maxp) &&
        (buscar == undefined ||
          element.name.toLowerCase().includes(buscar) ||
          element.description.toLowerCase().includes(buscar))
      ) {
        content +=
          '<div class="col-lg-3 row border rounded" id="margin"  style="margin:15px;"> <a href=">';
        content +=
          '<img id="imagen" src="../'+element.imgSrc+'" alt=""/>';
        content += "<p>Nombre: " + element.name + "</p>";
        content += "<p>Precio: " + element.currency + element.cost + "</p>";
        content += "<p>vendidos: " + element.soldCount + "</p>";
        content += "<p>Descripción: " + element.description + "</p>";
        content += "</div> <br>";
      }
    }

    document.getElementById("mainproducts").innerHTML = content;
  }

  //función que ordena un "array" de la forma que sea especificada con el "num"
  function sortProducts(num, array) {
    
    let result = [];
    if (num === 2) {
      result = array.sort(function (a, b) {
        if (a.cost < b.cost) {
          return -1;
        }
        if (a.cost > b.cost) {
          return 1;
        }
        return 0;
      });
    } else if (num === 1) {
      result = array.sort(function (a, b) {
        if (a.cost > b.cost) {
          return -1;
        }
        if (a.cost < b.cost) {
          return 1;
        }
        return 0;
      });
    } else if (num === 3) {
      result = array.sort(function (a, b) {
        if (a.soldCount > b.soldCount) {
          return -1;
        }
        if (a.soldCount < b.soldCount) {
          return 1;
        }
        return 0;
      });
    }
setProductsHookInuse(result);
  }
  //carga productos sin filtros al inicio de la pagina

  const [hook, sethook] = useState<ProductModel[]>([]);
  const [hooknav1,sethooknav1]=useState("navItems")
    const [hooknav2, sethooknav2] = useState("navItems");
  const [hooknav3, sethooknav3] = useState("navItems");
  const [hooknav4, sethooknav4] = useState("navItems");
  const [hooknavuser, sethooknavuser] = useState("navItems");
  const [hookstart,sethookstart]=useState("")

  function navitemes(element){
    
  if (element.id === "hooknav1") {

    sethookstart("1");
  }
  if (element.id === "hooknav2") {
    sethookstart("2");

  }
  if (element.id === "hooknav3") {
 
    sethookstart("3");
  }
  if (element.id === "hooknav4") {

    sethookstart("4");
  }

  if (element.id === "hooknavuser") {

    sethookstart("5");
  }
  
  }


  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




const [NameUser, setNameUser] = useLocalStorage("name","");
const [ApellidoUser, setApellidoUser] = useLocalStorage("apellido", "");
const [passUser, setPassUser]=useLocalStorage("pass","");
const [EdadUser, setEdadUser] = useLocalStorage("edad", "");
const [TelefonoUser, setTelefonoUser] = useLocalStorage("telefono", "");

const [EmailUser, setEmailUser] = useLocalStorage("email", "");

const [FotoUser, setFotoUser] = useLocalStorage("foto", "");;
const [passwordUser, sePasswordUser] = useLocalStorage("password", "");



const [cartCuantity, setcartCuantity] = useLocalStorage("cartCuantity", 0);


const [flag, setflag] = useLocalStorage("flag"," ");


const [hookflag, sethookflag]=useState("init")

const [related, setrelated] = useState([
  { name: "", src: {} },
  { name: "", src: {} },
]);


const [cartItems, setcartItems] = useLocalStorage("cartItems",[]);


const [cartclasname, setcartclasname] = useState("cartNumber1 ");

const[newItems,setnewItems]=useState([])
///////


  const [resulta, setresulta] = useLocalStorage("resulta", [1])

function comentar(object){

  if (object.user!=""){setresulta(resulta.concat(object))
  }else{
    alert("es necesario estar registrado con un nombre de usuario para comentar las publicaciones")
  }

}

function starts(score){

if (score === 0) {
  return (
    <>
      <span className="fa fa-star" id="star2"></span>
      <span className="fa fa-star " id="star2"></span>
      <span className="fa fa-star" id="star2"></span>
      <span className="fa fa-star" id="star2"></span>
      <span className="fa fa-star" id="star2"></span>
    </>
  );
}
if(score===1){
      return(<><span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star "  id="star2"></span>
      <span className="fa fa-star"  id="star2"></span>
      <span className="fa fa-star"  id="star2"></span>
      <span className="fa fa-star"  id="star2"></span></>
      
      )
}
if(score===2){
      return (
        <>
          <span className="fa fa-star orange" id="star2"></span>
          <span className="fa fa-star orange" id="star2"></span>
          <span className="fa fa-star" id="star2"></span>
          <span className="fa fa-star" id="star2"></span>
          <span className="fa fa-star" id="star2"></span>
        </>
      );
}if (score === 3) {
  return (
    <>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star" id="star2"></span>
      <span className="fa fa-star" id="star2"></span>
    </>
  );
}if (score === 4) {
  return (
    <>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star" id="star2"></span>
    </>
  );
}if (score === 5) {
  return (
    <>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star orange" id="star2"></span>
      <span className="fa fa-star orange" id="star2"></span>
    </>
  );
}

}
const [flags, setflags] = useLocalStorage("flagg","");

const [emailtags, setemailtags] = useState("");

function navuser(){
  if (NameUser==="") {
  setemailtags(EmailUser);
  }else{

    setemailtags(NameUser)
    
  }
return emailtags;


}
   const [file, setFile] = useLocalStorage("pickture", null);

  return (
    <EcommerceContext.Provider
      value={{
        hook,starts,passwordUser, sePasswordUser,
        getJSONData,navuser,file, setFile,
        comentar,
        CATEGORIES_URL,
        PUBLISH_PRODUCT_URL,
        CATEGORY_INFO_URL,
        PRODUCTS_URL,flags, setflags,
        PRODUCT_INFO_URL,
        PRODUCT_INFO_COMMENTS_URL,
        CART_INFO_URL,
        CART_BUY_URL,
        ORDER_ASC_BY_NAME,passUser, setPassUser,
        ORDER_DESC_BY_NAME,
        ORDER_BY_PROD_COUNT,
        sortCategories,
        showCategoriesList,
        showSpinner,cartCuantity, setcartCuantity,
        hideSpinner,
        setminCount,
        setmaxCount,
        minCount,
        maxCount,
        showproducts,
        sortProducts,
        minp,
        maxp,
        buscar,
        setbuscar,newProductsHookInuse, setnewProductsHookInuse,
        setmaxp,
        setminp,
        hooknav1,
        hooknav2,
        hooknav3,
        hooknav4,
        hooknavuser,
        sethooknav1,
        sethooknav2,
        sethooknav3,
        sethooknav4,
        sethooknavuser,
        hookstart,
        sethookstart,
        navitemes,
        loginhook,
        setloginhook,
        show,
        setShow,
        handleClose,
        handleShow,
        flag,
        setflag,

        NameUser,
        setNameUser,
        ApellidoUser,
        setApellidoUser,
        EdadUser,
        setEdadUser,
        TelefonoUser,
        setTelefonoUser,
        EmailUser,
        setEmailUser,
        FotoUser,
        setFotoUser,
        arrayimages,
        categoriesHook,
        setcategoriesHook,
        setProductsHook,
        ProductsHook,
        productsimages,
        hookflag,
        sethookflag,
        categoriesHookInuses,
        setcategoriesHookInuses,
        ProductsHookInuse,
        setProductsHookInuse,
        arrayImagesProductsInfoCarrousel,
        productoAUsar,
        setproductoAUsar,
        related,
        setrelated,
        cartItems,
        setcartItems,
        cartclasname,
        setcartclasname,
        newItems,
        setnewItems,
        resulta,
        setresulta,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
}