import { useContext, useEffect, useState } from "react";
import { EcommerceContext } from "../context/EcommerceProvider";
import CartItem from "../Component/cartItem"
import { Button, Dropdown, Form, Modal } from "react-bootstrap";

const CarritoContainer=()=>{

const { setcartCuantity, cartItems, setcartItems, sethookstart } =
  useContext(EcommerceContext);

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


const[cart,setcart]=useState([])
const[subtotal,setsubtotal]=useState(()=>{
  let numbers=0
  cartItems.map((element) => {
     numbers+=(element.count * element.cost)
  })
  return numbers

})
const [Total, setTotal] = useState(0);
const [KindOf, setKindOf] = useState("");
const [TipodeEnvio,setTipoDeEnvio]=useState("Tipo de Envio")
const [TipodePago, setTipoDePago] = useState("Tipo de Pago");

useEffect(() => {
  setcart(cartItems);
  
  sethookstart("5");

  if(TipodeEnvio=="Premium"){
    setTotal((subtotal*1.15))
  }
  if (TipodeEnvio == "Standard") {
    setTotal(subtotal * 1.05);
  }
  if (TipodeEnvio == "Express") {
    setTotal(subtotal * 1.07);
  }
}, [setcartCuantity, cartItems, setTipoDeEnvio,TipodeEnvio]);
    return (
      <>
        <div
          className="col-10 "
          style={{
            padding: "35px 0px 0px ",
            height: " 550px",
            
          }}
        >
          <div className="row ">
            <div
              className="col-lg-8 col-12 border rounded"
              style={{
                alignItems: "center",
                height: "100%",
                margin: "15px",
                padding: "15px",
                paddingLeft: "15px",
                backgroundColor: " white",
              }}
            >
              <div className="row">
                <div className="col-6">
                  <h1 style={{ marginLeft: "15px" }}>Carrito</h1>
                </div>
                <div className="col-2" style={{ marginTop: "35px" }}>
                  <strong>
                    <p
                      style={{
                        marginBottom: "0px",
                        fontSize: "25px",
                      }}
                    >
                      Cantidad
                    </p>
                  </strong>
                </div>
                <div
                  className="col-3"
                  style={{ marginTop: "35px ", marginLeft: "25px" }}
                >
                  <strong>
                    <p
                      style={{
                        marginBottom: "0px",
                        fontSize: "25px",
                        marginLeft: "10px",
                      }}
                    >
                      Costo
                    </p>
                  </strong>
                </div>
              </div>
              <div id="items">
                {cart.map((element, index) => (
                  <CartItem
                    key={index}
                    src={element.images[0]}
                    name={element.name}
                    currency={element.currency}
                    unitCost={element.cost}
                    count={element.count}
                    sub={element.sub}
                    id={element.index}
                  />
                ))}
              </div>
            </div>

            <div
              className="col-lg-3 col-12 border rounded"
              style={{
                alignItems: "center",
                height: "100%",
                margin: "15px",
                backgroundColor: " white",
              }}
            >
              <div className="col-12">
                <div>Subtotal:{subtotal}</div>
                <div>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      {TipodeEnvio}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="#/action-1"
                        onClick={() => {
                          setTipoDeEnvio("Premium");
                        }}
                      >
                        Premium:2-4 Días(+15% del subtotal)
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        onClick={() => {
                          setTipoDeEnvio("Standard");
                        }}
                      >
                        Standard:12-15 Días(+5% del subtotal)
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        onClick={() => {
                          setTipoDeEnvio("Express");
                        }}
                      >
                        Express:5-8 Días(+7% del subtotal)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div>Total:{Total}</div>
                <label htmlFor="dir1">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="dir1"
                  placeholder=""
                />
                <label htmlFor="dir2">País</label>
                <input
                  type="text"
                  className="form-control"
                  id="dir2"
                  placeholder=""
                />
              </div>
              <div style={{ marginTop: "5px" }}>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {TipodePago}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={handleShow}>
                      Debito: Visa
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={handleShow}>
                      Devito: MasterCard
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={handleShow1}>
                      Transferencia Bancaria
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: "5px" }}
                >
                  <button
                    className="btn btn-primary"
                    id="btncomprar"
                    style={{ width: "200px" }}
                  >
                    Comprar
                  </button>
                </div>
                <div className="row">
                  <p id="validationtext" style={{ color: "red" }}></p>
                </div>
                <div className="row">
                  <p id="validationtextT" style={{ color: "green" }}></p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Datos de Tarjeta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Numero de tarjeta</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="12341234543212344"
                  name="name"
                  id="nameid"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" id="edadid" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apellido"
                  id="telefonoid"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Fecha de expiración</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="dd/mm/aaaa"
                  id="emailid"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CVC</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1234"
                  id="contraseñaid"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Transferencia bancaria</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Banco</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="BROU"
                  name="name"
                  id="nameid"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" id="edadid" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apellido"
                  id="telefonoid"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Numero de cuenta</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="12398543"
                  id="emailid"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Monto</Form.Label>
                <Form.Control type="number" placeholder="$" id="contraseñaid" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default CarritoContainer;