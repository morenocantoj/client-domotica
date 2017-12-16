import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { Button, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class ControllersList extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <ReactTable
          data= {this.props.house.controladores}
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
                <LinkContainer to={"/casas/"+this.props.house.inmueble_id+"/controller/"+row.value} className="btn btn-info button disabled">
                  <i className="fa fa-pencil"/></LinkContainer>
                <LinkContainer to={"/casas/"+this.props.house.inmueble_id+"/controller/"+row.value} className="btn btn-success button">
                  <i className="fa fa-eye"/></LinkContainer>
                </div>
              )
            }
          ]}
          defaultPageSize={5}
          className="-striped"/>
      </div>
    )
  }
}

export default ControllersList;
