import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="text-muted "
      style={{
        backgroundColor: " #202020",
        
      }}
    >
      <div
        className="container col-12"
        style={{
          borderTop: "2px solid #eef1f5",
          borderBottom: "2px solid #eef1f5",
        }}
      >
        <div className="col-12 d-flex " style={{ paddingTop: "15px" }}>
          <div
            className="col-4  d-flex justify-content-center align-items-center"
            style={{ color: "white" }}
          >
            <div className="col-6 ">
              <ul>
                <li>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "#eef1f5",
                      fontSize: "20px",
                    }}
                  >
                    <strong>Inicio</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="/categorias"
                    style={{
                      textDecoration: "none",
                      color: "#eef1f5",
                      fontSize: "20px",
                    }}
                  >
                    <strong>Categorias</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="/productos"
                    style={{
                      textDecoration: "none",
                      color: "#eef1f5",
                      fontSize: "20px",
                    }}
                  >
                    <strong>Productos</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6" style={{ color: "white" }}>
              <ul>
                <li>
                  <a
                    href="/vender"
                    style={{
                      textDecoration: "none",
                      color: "#eef1f5",
                      fontSize: "20px",
                    }}
                  >
                    <strong>Vender</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="/carrito"
                    style={{
                      textDecoration: "none",
                      color: "#eef1f5",
                      fontSize: "20px",
                    }}
                  >
                    <strong> Carrito</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="/perfil"
                    style={{
                      textDecoration: "none",
                      color: "#eef1f5",
                      fontSize: "20px",
                    }}
                  >
                    <strong> Mi perfil</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <a
              href="#"
              style={{
                color: "#eef1f5",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              <strong> Volver arriba</strong>
            </a>
          </div>
        </div>
        <p className="float-right"></p>
      </div>
    </footer>
  );
};

export default Footer;
