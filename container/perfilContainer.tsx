import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { json } from "stream/consumers";
import Images from "../Component/Images";
import { EcommerceContext } from "../context/EcommerceProvider";
import { useLocalStorage } from "../useLocalStorage";

const PerfilContainer=()=>{


const {
  handleClose,
  show,
  handleShow,

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
  sethookstart,
  setPassUser,
  PassUser,
} = useContext(EcommerceContext);
const [nombretag,setnombretag]=useState("")
const [apellidotag, setapellidotag] = useState("");
const [edadtag, setedadtag] = useState("");
const [telefonotag, setTelefonotag] = useState("");
const [emailtag, setemailtag] = useState("");
const [fototag, setfototag] = useState("");
const[passtag,setpasstag]=useState("")
   const [fileimage, setFileimage] = useLocalStorage("image", null);
   const [fileimageinuse, setFileimageinuse] = useState();

const [imageg, setimageg] = useState(<img className="img" src="" />);

/*{function asd() {
  const reader = new FileReader();
  reader.addEventListener("load", (result) => {
     setFileimage("reacent-image", reader.result);
  });

  reader.readAsDataURL(
    document.getElementById("fileinput").files[0]
  );
}}
*/
useEffect(() => {

  

  sethookstart("5");
setFileimageinuse(fileimage)
  setnombretag(NameUser);
  setapellidotag(ApellidoUser);
  setedadtag(EdadUser);
  setTelefonotag(TelefonoUser);
  setemailtag(EmailUser);
    setpasstag(PassUser);

}, [
  setNameUser,
  ApellidoUser,
  setEdadUser,
  setTelefonoUser,
  setEmailUser,
  setFotoUser,
  setPassUser
]);


    return (
      <>
        <div
          className="body col-12 d-flex justify-content-center"
          style={{ paddingBottom: "200px" }}
        >
          <div
            className="col-6 body"
            style={{ height: "800px", margin: "15px" }}
          >
            <div className="col-12 body">
              <div
                className="d-flex justify-content-center"
                style={{ margin: "35px", fontSize: "40px" }}
              >
                {" "}
                <h1>
                  <strong>Usuario</strong>
                </h1>
              </div>
              <br />

              <div
                className="d-flex justify-content-center "
                style={{ height: "800px" }}
              >
                <div
                  className="col-6 border rounded"
                  style={{
                    backgroundColor: "white",
                    padding: "30px",
                    height: "650px",
                    margin: "15px",
                  }}
                >
                  <div className="row" style={{ marginLeft: "0px" }}>
                    <h3
                      style={{
                        borderBottom: "2px black solid",
                        paddingBottom: "20px",
                      }}
                    >
                      Información Personal
                    </h3>
                  </div>
                  <br />
                  <div className="col-12">
                    <div className="row">
                      <div>
                        <strong>Nombre de Usuario:</strong>
                        <div>{nombretag}</div>
                      </div>
                    </div>

                    <div className="row">
                      <div>
                        <strong>Edad:</strong>
                        <div id="Edad">{edadtag}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <strong>Teléfono:</strong>
                        <div id="Teléfono">{telefonotag}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <strong>Email:</strong>
                        <div id="Email">{emailtag}</div>
                      </div>
                    </div>
                    
                    <div
                      className="imgfather row"
                      style={{ height: "250px", width: "200px" }}
                      id="results"
                    ></div>
                  </div>
                  <br />
                  <div style={{ height: "300px" }}>
                    <div className="align-bottom" style={{ marginLeft: "0px" }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={handleShow}
                      >
                        Cambiar información personal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  type="password"
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
           /*     asd();*/
                setNameUser((document.getElementById("nameid")as HTMLInputElement).value);
                setPassUser((document.getElementById("passwordid")as HTMLInputElement).value);

                setEdadUser((document.getElementById("edadid")as HTMLInputElement).value),
                  setTelefonoUser((document.getElementById("telefonoid")as HTMLInputElement).value);
                setEmailUser((document.getElementById("emailid")as HTMLInputElement).value);
              }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default PerfilContainer;