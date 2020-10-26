import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='d-flex flex-column'>
        <Router className='container-fluid'>
          <Navigation className='d-flex border'/>

          <Switch>
            <Route path='/' exact component={() => <Home />} />
            <Route path='/producto' exact component={() => <Product />} />
            <Route path='/contacto' exact component={() => <Contact />} />
         
          </Switch>
          
          <Footer className='d-flex' />
        </Router>
      </div>
    </>
  );
}

export default App;
