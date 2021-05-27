import React, { Component } from 'react';
import Footer from './components/footer/footer';
import Slider from './components/slider/slider.component';
import './App.css';
import Navigation from "./components/Navigation"
import { Jumbotron, Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron className="jumbotron">
          <Slider />
          <hr className="my-2" />
          <p className="lead">
            <Button color="primary">Exhorbi Consult</Button>
          </p>
          <p className="lead">
            <Button color="primary">Noli Publishers</Button>
          </p>
        </Jumbotron>
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
