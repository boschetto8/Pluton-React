import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';

//Views
import Home from './Views/Home/Home';
import Contact from './Views/Contact/Contact';
import About from './Views/About/About';
import BookDetail from './Views/BookDetail/BookDetail';

const App = () => {
  return (
      <Router>
          <div className="App">
              <NavBar prop/>
              <Header welcome='¡Bienvenido a nuestra página de lectura!'/>
            <Switch>  
                <Route path='/' exact component={Home} />
                <Route path='/contact' component={Contact}/>
                <Route path='/about' component={About} />
                <Route path='/detail/:id' component={BookDetail} /> 
             </Switch>
              
            
          </div>
     </Router>
  );
}

export default App;
