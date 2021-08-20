import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
        <NavBar prop/>
        <ItemListContainer welcome='¡Bienvenido a nuestra página de lectura!'/>
              
     </div>
  );
}

export default App;
