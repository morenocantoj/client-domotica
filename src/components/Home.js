import React, { Component } from 'react';
import { Col, Row, Legend, Button } from 'react-bootstrap';
import './styles/Home.css';
import { getHouses } from '../API/methods';
import ReactTable from 'react-table';
import { LinkContainer } from 'react-router-bootstrap';
import "react-table/react-table.css";
import {Redirect} from 'react-router-dom'
import '../views/styles/main.css'

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      houses: this.getHouses()
    }
  }


  getHouses() {
    getHouses({token: this.props.user.token}).then((body) => {
        this.setState({houses: body.casas});
    })
    .catch((error) => {
      console.log(error.errMessage);
    });
  }

  getHouse(id) {
    this.state.houses.map((house) => {
      if(house.id === id) {
        return house
      }
    })
  }

  render() {
    const { houses } = this.state;

    return (
      <div>
        <legend><h2>Inmuebles <small>{this.props.user.name}</small></h2></legend>
        <ReactTable
          data= {houses}
          columns = {[
            {
              Header: "Nombre",
              accessor: "nombre"
            },
            {
              Header: "Localidad",
              accessor: "poblacion"
            },
            {
              Header: "Dirección",
              accessor: "direccion"
            },
            {
              Header: "Código Postal",
              accessor: "codigo_postal",
              maxWidth: 100
            },
            {
              Header: "Acciones",
              accessor: "id",
              maxWidth: 200,
              Cell: row => (
                <div>
                  <LinkContainer to='#'>
                    <Button className="btn btn-accent button disabled">
                      <i className="fa fa-pencil"/>
                    </Button>
                  </LinkContainer>
                  <LinkContainer to={"/casas/" + row.value}>
                    <Button className="btn btn-accent button">
                      <i className="fa fa-eye"/>
                    </Button>
                  </LinkContainer>
                </div>
              )
            }
          ]}
          defaultPageSize={5}
          className="-striped"/>
        </div>
    );
  }
}

export default Home;
