import '../scss/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';





const NavBar = () => {
    return ( 

        <Navbar bg="dark" variant="dark" className="menu">
        <Container className="menu1" >
            <Navbar.Brand href="#home">DistriBA</Navbar.Brand>
            <Nav className="me-auto">
            <Link to='#home' className="header-navlink">Home</Link>
            <Link to='/SobreNosotros' className="header-navlink">Sobre Nosotros</Link>
            <Link to='/Contacto' className="header-navlink">Contacto</Link>
            </Nav>
            
        </Container>
        <CartWidget></CartWidget>
        </Navbar>

);
}

export default NavBar