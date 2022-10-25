import { useContext, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { EcommerceContext } from "../context/EcommerceProvider";


const LoginContainer=()=>{

  
const {
  handleClose,
  show,
  handleShow,
  passwordUser,
  sePasswordUser,
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
  sethookstart,
  PassUser,
  setPassUser,
} = useContext(EcommerceContext);
useEffect(() => {
 
}, [
]);
return (
  <>
    <div
      className=" rowcontainer d-row justify-content-center align-items-center"
      style={{
        zIndex: "2",
        position: "absolute",
        top: "0",
        bottom: "76px",
        width: "100%",
        height: "100%",
        backgroundColor: "#eef1f5",
      }}
    >
      <div className="container ">
        <div
          style={{
            minWidth: "5px",
            textAlign: "center",
            fontSize: "55px",
            padding: "200px 0px 50px",
          }}
        >
          <strong>Logearse</strong>
        </div>
      </div>
      <div className="container d-flex align-items-center justify-content-center">
        <div
          className="rounded "
          style={{ backgroundColor: "white", padding: "15px" }}
        >
          <div className="container">
            <label htmlFor="Email" style={{ padding: "10px", color: "black" }}>
              Email
            </label>
            <br />
            <input type="email" placeholder="Email " required id="email1" />
          </div>
          <div className="container">
            <label htmlFor="Email" style={{ padding: "10px", color: "black" }}>
              Contraseña
            </label>
            <br />
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              required
            />
          </div>
          <label
            className="remember"
            htmlFor="remember"
            style={{ padding: "10px" }}
          >
            <input type="checkbox" />
            Remember me
          </label>
          <br />
          <div className="col-12 d-flex justify-content-end">
            <Button
              id="submitb"
              type="submit"
              onClick={() => {
                if (
                  (document.getElementById("password") as HTMLInputElement)
                    .value != "" &&
                  (document.getElementById("email1") as HTMLInputElement).value != ""
                ) {
                  window.location.href = "/";
                  setPassUser(
                    (document.getElementById("password") as HTMLInputElement)
                      .value
                  );
                  setEmailUser(
                    (document.getElementById("email1") as HTMLInputElement)
                      .value
                  );
                } else {
                  alert(
                    "debes almenos ingresar una contraseña y email validos"
                  );
                }
              }}
            >
              {" "}
              Enviar
            </Button>
          </div>
        </div>
      </div>
      <p
        className="account d-flex align-items-center justify-content-center"
        onClick={handleShow}
      >
        No tienes una cuenta? <a style={{ color: "white" }}><strong style={{color:"black"}}>Registrate</strong></a>
      </p>
    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar datos de usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              name="name"
              id="nameid"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="text"
              placeholder="Contraseña"
              name="name"
              id="passwordid"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Edad</Form.Label>
            <Form.Control type="number" placeholder="Edad" id="edadid" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Teléfono"
              id="telefonoid"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" id="emailid" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

     
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            setNameUser((document.getElementById("nameid") as HTMLInputElement).value);
            setEdadUser((document.getElementById("edadid") as HTMLInputElement).value),
              setTelefonoUser((document.getElementById("telefonoid") as HTMLInputElement).value);
            setEmailUser((document.getElementById("emailid") as HTMLInputElement).value);
            setPassUser((document.getElementById("passwordid") as HTMLInputElement).value);
            if (
              (document.getElementById("nameid") as HTMLInputElement).value !=
                "" &&
              (document.getElementById("emailid") as HTMLInputElement).value !=
                "" &&
              (document.getElementById("passwordid") as HTMLInputElement)
                .value != ""
            ) {
              window.location.href = "/";
            } else {
              alert(
                "debes almenos ingresar una contraseña, email y nombre de usuario para poder ingresar"
              );
            }
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}
export default LoginContainer;