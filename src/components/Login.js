import React, { Component } from 'react';
import { Button, Col, Row, Form, FormControl, ControlLabel, FormGroup } from 'react-bootstrap';
import { login } from '../API/methods';
import './styles/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login : "",
            password : "",
            formErrors: {login: "", password: ""},
            loginValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({[name]: value},
                  () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let loginValid = this.state.loginValid;
      let passwordValid = this.state.passwordValid;

      console.log(fieldName + " valor: " + value);

      switch (fieldName) {
        case 'login':
          loginValid = value.length > 0;
          fieldValidationErrors.login = loginValid ? '' : ' es demasiado corto';
          console.log("Valido: " + loginValid);
          break;
        case 'password':
          passwordValid = value.length > 0;
          fieldValidationErrors.password = passwordValid ? '' : ' es demasiado corto';
          console.log("Valido: " + passwordValid);
          break;
        default:
          break;
      }

      this.setState({formErrors: fieldValidationErrors,
                    loginValid: loginValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
    }

    validateForm() {
      console.log("Validation: " + this.state.loginValid +" "+ this.state.passwordValid)
      this.setState({formValid: this.state.loginValid && this.state.passwordValid});
    }

    /**
    * Tries to login to API with username and password
    */
    login() {
        let response = login({login: this.state.login, password: this.state.password});

        response
        .then(
          (body) => {
          localStorage.setItem('token', body.token);
        })
        .catch((error) => {
          console.log("¡Error!");
        });
    }

    render() {
        return (
            <form>
                <Col md={12} className="header-login">
                    <h1>Iniciar Sesión</h1>
                </Col>

                    <Col md={4} lg={4} mdOffset={4} lgOffset={4}>
                        <FormGroup>
                            <ControlLabel>Usuario</ControlLabel>
                            <FormControl type="text" name="login" placeholder="Dale ahí tu nombre hermano"
                                onChange={this.handleUserInput}
                                value={this.state.login}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Contraseña</ControlLabel>
                            <FormControl name="password" type="password"
                            onChange={this.handleUserInput}
                            value={this.state.password}/>
                        </FormGroup>
                        <FormGroup>
                            <Button type="button" className="btn-info" onClick={() => this.login()}
                              disabled={!this.state.formValid}>
                                Iniciar Sesión</Button>
                        </FormGroup>
                    </Col>
            </form>
        );
    }
}

export default Login;
