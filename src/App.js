import './App.css';
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';

//Views
import Home from './Views/Home/Home';
import Contact from './Views/Contact/Contact';
import About from './Views/About/About';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';
import Category from './Views/Category/Category';
import Cart from './Views/Cart/Cart';


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header welcome='¡Bienvenidos a la página de lectura!'/>
          <Switch>
            <Route path='/' exact component ={Home} />
            <Route path='/contact' component ={Contact} />
            <Route path='/about' component ={About} />
            <Route path='/books/:id' component={ItemDetailContainer} />
            <Route path='/category/:id' component={Category} />
            <Route path='/cart' component={Cart} />

          </Switch>  
        </div>
    </Router>
  );
}

export default App;
