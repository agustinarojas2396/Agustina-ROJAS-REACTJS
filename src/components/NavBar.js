import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const NavBar = () => {
    return ( 

        <Navbar bg="dark" variant="dark" className="menu">
        <Container className="menu1" >
            <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Container>
        </Navbar>

);
}

export default NavBar