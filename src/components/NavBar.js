import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js';





const NavBar = () => {
    return ( 

        <Navbar bg="dark" variant="dark" className="menu">
        <Container className="menu1" >
            <Navbar.Brand href="#home">DistriBA</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">Productos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
            
        </Container>
        <CartWidget></CartWidget>
        </Navbar>

);
}

export default NavBar