import { Nav } from "react-bootstrap";
import { navitemindividualmodal } from "../models/navitemindividualmodal";

import styles from "../styles/Home.module.css";

const Navitemindividual = (props: navitemindividualmodal) => {
  return (
     
      <a
        href={props.href}
        id={props.id}
        onClick={props.click}
        className={props.class}
      >
        {props.text}
      </a>
  );
};
export default Navitemindividual;