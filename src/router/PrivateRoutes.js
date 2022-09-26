import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Alimentos from '../components/Alimentos';
import Contacto from '../components/Contacto';
import Accesorios from '../components/Accesorios';
import Premium from '../components/Premium';
import Cart from '../cart/Cart';
import Checkout from '../components/Checkout';

const PrivateRoutes = () => {

    return (
        <>
            {/* ROUTER PRIVADO */}
            <NavBar/>
            <Routes className = "App">
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path="/Alimentos" element={<Alimentos/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/Accesorios" element={<Accesorios/>}/>
                <Route path="/Premium" element={<Premium/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='*' element={ <Navigate to="/"/>} />
            </Routes>
        </>
    )
}

export default PrivateRoutes