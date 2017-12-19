import React, { Component } from 'react';
import { Button, Col, Row, Form, FormControl, ControlLabel, FormGroup } from 'react-bootstrap';
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

      switch (fieldName) {
        case 'login':
          loginValid = value.length > 0;
          fieldValidationErrors.login = loginValid ? '' : ' es demasiado corto';
          break;
        case 'password':
          passwordValid = value.length > 0;
          fieldValidationErrors.password = passwordValid ? '' : ' es demasiado corto';
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
      this.setState({formValid: this.state.loginValid && this.state.passwordValid});
    }

    /**
    * Tries to login to API with username and password
    */
    handleLogin(e) {
      e.preventDefault();
      this.props.login(this.state.login, this.state.password);
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
                            <Button type="submit" className="btn-info" onClick={(e) => this.handleLogin(e)}
                              disabled={!this.state.formValid}>
                                Iniciar Sesión</Button>
                        </FormGroup>
                    </Col>
            </form>
        );
    }
}

export default Login;
