import React, { Component } from 'react';
import { Button, Col, Row, Form, FormControl, ControlLabel, FormGroup } from 'react-bootstrap';
import { login } from '../API/methods';
import './styles/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login : "",
            password : ""
        }
    }

    login() {
        let response = login({login: this.state.login, password: this.state.password});

        response.then((body) => {
            console.log(body.token)
        })
    }

    render() {
        return (
            <form>
                <Col md={12}>
                    <h1>Iniciar Sesión</h1>
                </Col>

                    <Col md={4} lg={4} mdOffset={4} lgOffset={4}>
                        <FormGroup>
                            <ControlLabel>Usuario</ControlLabel>
                            <FormControl type="text" name="login" placeholder="Dale ahí tu nombre hermano"
                                onChange={(event) => this.setState({login: event.target.value})}
                                value={this.state.login}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Contraseña</ControlLabel>
                            <FormControl name="password" type="password"
                            onChange={(event) => this.setState({password: event.target.value})}
                            value={this.state.password}/>
                        </FormGroup>
                        <FormGroup>
                            <Button type="button" className="btn-info" onClick={() => this.login()}>
                                Iniciar Sesión</Button>
                        </FormGroup>
                    </Col>
            </form>
        );
    }
}

export default Login;