import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Row } from 'react-bootstrap';
import Login from './containers/LoginContainer';
import Home from './components/Home';
import Router from './components/Router';

class App extends Component {
  handleClick(event) {
    event.preventDefault()
  }
  render() {
    return (
      <Router/>
    );
  }
}

export default App;
