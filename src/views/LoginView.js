import React, { Component } from 'react';
import Login from '../components/Login';
import logo from '../logo.svg';
import { Button, Col, Row } from 'react-bootstrap';
import Home from '../components/Home';
import { Redirect } from 'react-router-dom';

class LoginView extends Component {
  render () {
    if(this.props.user !== undefined) {
      return (<Redirect to="/home"></Redirect>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a Iberrally domótica</h1>
        </header>
        <Login {...this.props}></Login>
      </div>
    )
  }
}

export default LoginView;
