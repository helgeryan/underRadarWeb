import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home';
import About from './About';
import Links from './Links';
import Profile from './Profile';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function NavbarComp() {
  return (
    <Router>
        <div className='container'>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Under Radar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/links"}>Links</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/profile"}>
                        Example User
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        <div>
            <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/links" element={<Links/>} />
            <Route path="/profile" element={<Profile/>} />
            </Routes>
        </div>
    </Router>
  );
}

export default NavbarComp;