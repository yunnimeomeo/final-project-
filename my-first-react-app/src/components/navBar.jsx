import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Website
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Home
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/about">
                About
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/recipeone">
                Recipe One
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/recipesall">
                Recipes All
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;