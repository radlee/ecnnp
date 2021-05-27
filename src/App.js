import React, { Component } from 'react';
import Footer from './components/footer/footer';
import Slider from './components/slider/slider.component';
import LogoHeader from './components/logo-header/logo-header.component';
import './App.css';
import Navigation from "./components/Navigation"
import { Jumbotron, Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron className="jumbotron">
          <LogoHeader />
          <Slider />
          <hr className="my-2" />
          <p className="lead">
            <Button color="primary" href="https://exhorbi.herokuapp.com/" target="_blank" >Exhorbi Consult</Button>
          </p>
          <p className="lead">
            <Button color="primary" href="https://radlee.github.io/nolipublishers/" target="_blank" >Noli Publishers</Button>
          </p>
        </Jumbotron>
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
