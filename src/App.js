
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




function App() {
  return (

    
    <BrowserRouter>
    <NavBar/>
    <Routes className = "App">
      <Route path='/' element={ <ItemListContainer/> }/>
      <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
      <Route path="/Alimentos" element={<Alimentos/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="/Accesorios" element={<Accesorios/>}/>
      <Route path="/Premium" element={<Premium/>}/>


      <Route path='*' element={ <Navigate to="/"/>} />
    </Routes>
</BrowserRouter>

  );
}

export default App;
