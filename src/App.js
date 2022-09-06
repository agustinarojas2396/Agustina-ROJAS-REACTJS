
import '../src/css/App.css';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './components/ListContainer.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    

    <Routes className = "App">
    <Route path='/' element={ <NavBar/> }/>
    <Route path='/' element={ <ListContainer  greeting="hola"/> }/>
      <Route path='/' element={ <ItemListContainer/> }/>
      <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
      <Route path='/item/:itemId' element={<ItemDetailContainer />}/>



      <Route path='*' element={ <Navigate to="/"/>} />
    </Routes>


    {/* <Footer/> */}
</BrowserRouter>

  );
}

export default App;
