
import '../src/css/App.css';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './components/ListContainer.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ListContainer greeting="hola"/>
    <ItemListContainer/>
    </div>
    
  );
}

export default App;
