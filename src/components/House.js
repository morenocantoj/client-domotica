import React, { Component } from 'react';
import { Col, Row, Legend, Button } from 'react-bootstrap';
import './styles/House.css';
import ReactTable from 'react-table';
import { LinkContainer } from 'react-router-bootstrap';
import "react-table/react-table.css";

class House extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.house === undefined) return null;
    return (
      <legend><h2>Controladores <small>{this.props.house.inmueble_nombre}</small></h2></legend>
    )
  }
}

export default House;
