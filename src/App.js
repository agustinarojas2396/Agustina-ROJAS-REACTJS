
import '../src/scss/App.scss';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/SobreNosotros';
import Contacto from './components/Contacto';



function App() {
  return (

    
    <BrowserRouter>
    <NavBar/>
    <Routes className = "App">
      <Route path='/' element={ <ItemListContainer/> }/>
      <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
      <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
      <Route path="/nosotros" element={<Nosotros/>}/>
      <Route path="/contacto" element={<Contacto/>}/>

      



      <Route path='*' element={ <Navigate to="/"/>} />
    </Routes>


</BrowserRouter>

  );
}

export default App;
