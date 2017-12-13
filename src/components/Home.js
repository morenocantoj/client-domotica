import React, { Component } from 'react';
import { Col, Row, Legend, Button } from 'react-bootstrap';
import './styles/Home.css';
import { getHouses } from '../API/methods';
import ReactTable from 'react-table';
import { LinkContainer } from 'react-router-bootstrap';
import "react-table/react-table.css";

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
              Header: "Acciones",
              accessor: "id",
              maxWidth: 200,
              Cell: row => (
                <div>
                <LinkContainer to={this.props.location.pathname+"/casas/"+row.value} className="btn btn-info button">
                  <i className="fa fa-pencil"/></LinkContainer>
                <LinkContainer to={this.props.location.pathname+"/casas/"+row.value} className="btn btn-success button">
                  <i className="fa fa-eye"/></LinkContainer>
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
