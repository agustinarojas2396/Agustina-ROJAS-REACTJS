
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';
import { useLoginContext } from '../context/LoginContext';
import NavBar from './NavBar';



export const Header = () => {

    const {user, logout} = useLoginContext()

    return (
        <header className="bg-header">
        <div className="header-container">
            <Link to="/"><h1 className="header-title">CODER</h1></Link>
            <NavBar></NavBar>
            <CartWidget />
        </div>


            <div className='header-user'>
                <small>Bienvenido: {user.user}</small>
                <button onClick={logout} className='btn btn-outline-danger'>Logout</button>
            </div>
        </header>
    )
}