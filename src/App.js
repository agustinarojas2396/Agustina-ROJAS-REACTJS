
import './App.css';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './components/ListContainer.js';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ListContainer greeting="hola"/>
    </div>
  );
}

export default App;
