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
              accessor: "nombre",
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
                  <LinkContainer to={"/casas/"+this.props.house.inmueble_id+"/controller/"+row.value}>
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
    )
  }
}

export default ControllersList;
