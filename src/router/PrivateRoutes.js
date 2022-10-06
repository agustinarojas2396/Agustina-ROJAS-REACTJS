import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contacto from '../components/Contacto';
import Cart from '../cart/Cart';
import Checkout from '../components/Checkout';

const PrivateRoutes = () => {

    return (
        <>
            {/* ROUTER PRIVADO */}
            <NavBar/>
            <Routes className = "App">
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/productos/:categoryId' element={<ItemListContainer />}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='*' element={ <Navigate to="/"/>} />
            </Routes>
        </>
    )
}

export default PrivateRoutes