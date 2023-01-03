import { Dropdown, Nav } from "react-bootstrap";
import styles  from  "../styles/Home.module.css"
import { useContext, useEffect, useState } from "react";

import {
  useDispatch,
  useSelector,
} from "../node_modules/react-redux/es/exports";
import { EcommerceContext } from "../context/EcommerceProvider";
import Navitemindividual from "./navitemindividual";
import Link from "next/link";
import { useLocalStorage } from "../useLocalStorage";
import cart from "../img/cart.png"
import Images from "./Images";
const NavItem=()=>{

 const dispatch = useDispatch();

 const { navitems } = useSelector((state: { data: any }) => state.data);
const [cartCuantito, setcartCuantito] = useState();

const {
  cartclasname,
  cartCuantity,
  setcartCuantity,
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
  navuser,
} = useContext(EcommerceContext);


let hooks = [0,hooknav1, hooknav2, hooknav3, hooknav4, hooknavuser];

useEffect(() => {
  setcartCuantito(cartCuantity);

  if (hookstart === "1") {
    sethooknav1("navItems2");
    sethooknav2("navItems");
    sethooknav3("navItems");
    sethooknav4("navItems");
    sethooknavuser("navItems");
  }
  if (hookstart === "2") {
    sethooknav2("navItems2");
    sethooknav1("navItems");
    sethooknav3("navItems");
    sethooknav4("navItems");
    sethooknavuser("navItems");
  }
  if (hookstart === "3") {
    sethooknav3("navItems2");
    sethooknav1("navItems");
    sethooknav2("navItems");
    sethooknav4("navItems");
    sethooknavuser("navItems");
  }
  if (hookstart === "4") {
    sethooknav4("navItems2");
    sethooknav1("navItems");
    sethooknav3("navItems");
    sethooknav2("navItems");
    sethooknavuser("navItems");
  }
  if (hookstart === "5") {
    sethooknavuser("navItems2");
    sethooknav1("navItems");
    sethooknav3("navItems");
    sethooknav4("navItems");
    sethooknav2("navItems");
  }
}, [
  hookstart,
  sethooknav1,
  sethooknav2,
  sethooknav3,
  sethooknav4,
  sethooknavuser,
  sethookstart,
  setcartCuantity,
  navuser,
]);
    return (
      <div
        className="col-12 d-flex justify-content-end  sticky-top"
        style={{
          backgroundColor: "#202020",
          textDecoration: "none",
          color: "white",
          height: "73px",
          paddingTop: "15px",
          zIndex: "1",
        }}
      >
        {navitems.map((element, index) => (
          <Navitemindividual
            key={index}
            href={element.href}
            id={element.id}
            text={element.text}
            class={hooks[element.number]}
            click={() => {
              navitemes(element);
            }}
            number={0}
          />
        ))}

        <Dropdown
          onClick={() => {
            navitemes(5);
          }}
        >
          <Dropdown.Toggle variant="Dark" style={{ border: "black" }}>
            <div
              className={hooks[5]}
              style={{ zIndex: "1", paddingBottom: "1px" }}
            >
              {navuser()}
              <div></div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{
              textDecoration: "none",
              color: "black",
              zIndex: "1",
              minWidth: "5px",
              padding: "2px",
            }}
          >
            <div className="col d-flex justify-content-center align-items-center">
              <a
                href="/perfil"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong style={{ fontSize: "19px" }}>Mi perfil</strong>
              </a>
            </div>
            <div
              className="col-12"
              style={{
                borderBottom: "2px grey solid ",
              }}
            ></div>
            <div className="col d-flex justify-content-center align-items-center">
              <a
                href="/carrito"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <div style={{ padding: "0px 10px 0px 0px" }}>
                    <strong style={{ fontSize: "19px" }}>
                      {" "}
                      {cartCuantito}
                    </strong>
                  </div>
                  <Images
                    src={cart}
                    width={40}
                    height={40}
                    alt={""}
                    Styles={""}
                  />
                </div>
              </a>
            </div>
            <div
              className="col-12"
              style={{
                borderBottom: "2px grey solid ",
              }}
            ></div>

            <div className="col d-flex justify-content-center align-items-center">
              <a
                href="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong style={{ fontSize: "19px" }}>Cerrar sesión</strong>
              </a>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );

}

export default NavItem; 