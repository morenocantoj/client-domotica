import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Row } from 'react-bootstrap';
import Login from './components/Login';

class App extends Component {
  handleClick(event) {
    event.preventDefault()
    console.log("cubalibre")
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a Iberrally domótica</h1>
        </header>
        <Login></Login>
      </div>
    );
  }
}

export default App;
