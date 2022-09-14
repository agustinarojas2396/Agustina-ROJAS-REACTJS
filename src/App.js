
import '../src/scss/App.scss';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Alimentos from './components/Alimentos';
import Contacto from './components/Contacto';
import Accesorios from './components/Accesorios';
import Premium from './components/Premium';
import { CartProvider } from './context/CartContext';
import Cart from '../src/cart/Cart';
import { DarkModeProvider } from './context/DarkModeContact';


const App = () => {


  return (
    <CartProvider>
      <DarkModeProvider>

    <BrowserRouter>
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


      <Route path='*' element={ <Navigate to="/"/>} />
    </Routes>
</BrowserRouter>
    </DarkModeProvider>
    </CartProvider>

  );
}

export default App;
