import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import granacrescelogo from "../../assets/granacrescelogo.png";
import "./styles.css";

function BasicExample() {
  return (
    // Navbar principal da aplicação
    <Navbar expand="md" className="col-sm bg-body-tertiary p-0">
      <Container fluid className="px-0">
        <img
          // logo principal da navbar
          src={granacrescelogo}
          alt="Logo"
          className="img-fluid align-top mx-4"
          style={{ maxHeight: "5em", width: "5em" }}
        />
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">
              <a
                href="https://www.infomoney.com.br/"
                style={{ textDecoration: "none", color: "#6e6868" }}
              >
                Notícias
              </a>
            </Nav.Link>
            <NavDropdown title="Mercados" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <a
                  href="https://www.coingecko.com/pt"
                  className="no-bootstrap-link"
                >
                  Criptoativos / DeFi
                </a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <a href="https://br.tradingview.com/symbols/NYSE-NYA/">
                  New York Stock Exchange (NYSE) - EUA
                </a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <a href="https://br.tradingview.com/symbols/NASDAQ-IXIC/">
                  Nasdaq Stock Market - EUA
                </a>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <a href="https://br.tradingview.com/chart/?symbol=BMFBOVESPA%3AIBOV">
                  Ibovespa (B3) - Brasil
                </a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
