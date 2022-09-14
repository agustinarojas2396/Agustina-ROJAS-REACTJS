import '../scss/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';




const NavBar = () => {
    return ( 

        <Navbar bg="dark" variant="dark" className="menu">
        <Container className="menu1" >
            <Navbar.Brand href="/">DistriBA</Navbar.Brand>
            <Nav className="me-auto">
            <Link to='/Alimentos' className="header-navlink">Alimentos</Link>
            <Link to='/Accesorios' className="header-navlink">Accesorios</Link>
            <Link to='/Contacto' className="header-navlink">Contacto</Link>
            <Link to='/Premium' className="header-navlink">Premium</Link>

            </Nav>
            
        </Container>
        <CartWidget></CartWidget>
        </Navbar>

);
}

export default NavBar