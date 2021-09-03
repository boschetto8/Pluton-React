import './App.css';
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import {  CartProvider } from './Components/CartContext/CartContext';
//Views
import Home from './Views/Home/Home';
import Contact from './Views/Contact/Contact';
import About from './Views/About/About';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';
import Category from './Views/Category/Category';
import Cart from './Views/Cart/Cart';



const App = () => {
  return (
  <CartProvider>
    <Router>
      <div className="App">
        <NavBar />
        <Header welcome='¡Bienvenidos a la página de lectura!'/>
          <Switch>
            <Route path='/' exact component ={Home} />
            <Route path='/contact' component ={Contact} />
            <Route path='/about' component ={About} />
            <Route path='/books/:id' component={ItemDetailContainer} />
            <Route path='/category/:categoryId' component={Category} />
            <Route path='/cart' component={Cart} />

          </Switch>  
        </div>
    </Router>
   </CartProvider>
  );
}

export default App;
