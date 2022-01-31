import React from "react";
import zapote from "./assets/zapote.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const isLandscape = () => {
    return window.innerHeight < window.innerWidth;
  };

  return (
    <>
      <div
        className="d-flex justify-content-center bg-success container-fluid"
        style={styles.bg}
      >
        <div
          className={`d-flex flex-column ${
            isLandscape() ? "w-75" : ""
          } border rounded-bottom shadow p-3 mb-3 bg-white mx-0 px-0`}
          style={styles.main}
        >
          <Router>
            <Navigation />

            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/producto" exact component={() => <Product />} />
              <Route path="/contacto" exact component={() => <Contact />} />
            </Switch>

            <Footer />
          </Router>
        </div>
      </div>
    </>
  );
}

const styles = {
  bg: {
    // width: '100vw',
    backgroundImage: `url(${zapote})`,
    // backgroundRepeat: 'repeat-y',
    // backgroundRepeat: 'repeat-y'
    backgroundSize: "cover",
    // object-fit: 'cover',
  },
  main: {
    // opacity: '0.95',
    // backgroundColor: 'rgba(245, 245, 245, 0.4)'
  },
};

export default App;
