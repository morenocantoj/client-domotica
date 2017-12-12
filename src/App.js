import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Row } from 'react-bootstrap';
import Login from './containers/LoginContainer';
import Home from './components/Home';

class App extends Component {
  handleClick(event) {
    event.preventDefault()
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
