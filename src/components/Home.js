import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './styles/Login.css';
import {getHouses} from '../API/methods'

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      houses: []
    }
  }

  componentWillMount() {
    this.getHouses()
  }

  getHouses() {
    getHouses({token: this.props.user.token}).then((body) => {
        this.setState({houses: body.casas});
    })
    .catch((error) => {
      console.log(error.errMessage);
    });
  }

  render() {
    return (
      <div>
        <h2>Hola {this.props.user.name}</h2>
      </div>
    );
  }
}

export default Home;
