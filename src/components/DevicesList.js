import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import { deleteDevice } from '../API/methods';
import { getController } from '../API/methods';
import ReactInterval from 'react-interval';

class DevicesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModalDelete: false,
      deviceId: 0,
      deviceName: "",
      devices: this.props.devices,
      timeout: 10000,
      enabled: true
    }
  }

  closeModalDelete() {
    this.setState({showModalDelete: false, deviceId: 0});
  }

  openModalDelete(device) {
    this.setState({showModalDelete: true, deviceId: device});
  }

  getDevices() {
      getController(this.props.houseId, this.props.controllerId)
      .then((controller) => {
        this.setState({devices: controller.dispositivos, isLoading: false});
      })
      .catch((error) => {
        console.log("Error retrieving data from server");
      });
  }

  deleteDevice() {
    deleteDevice({token: this.props.user.token, houseId: this.props.houseId,
      controllerId: this.props.controllerId, deviceId: this.state.deviceId})
      .then((response) => {
        this.closeModalDelete();
        this.getDevices();
      })
  }

  render() {
    const timeout = this.state.timeout;
    const enabled = this.state.enabled;

    return (
      <div>
        <ReactInterval {...{timeout, enabled}}
          callback={() => this.getDevices()}></ReactInterval>
        <ReactTable
          data= {this.state.devices}
          columns = {[
            {
              Header: "Tipo",
              Cell: row => (
                <div>Aire Acondicionado</div>
              )
            },
            {
              Header: "Nombre",
              accessor: "nombre"
            },
            {
              Header: "Temperatura",
              accessor: "temperatura",
              maxWidth: 110,
              Cell: row => (
                <div>{row.value}ºC</div>
              )
            },
            {
              Header: "Acciones",
              accessor: "dispositivo_id",
              maxWidth: 200,
              Cell: row => (
                <div>
                <LinkContainer to={"/casas/"+row.value}>
                  <Button className="btn btn-info button"><i className="fa fa-pencil"/></Button>
                  </LinkContainer>
                <LinkContainer to={"/casas/" + row.value}>
                  <Button className="btn btn-success button"><i className="fa fa-eye"/></Button>
                  </LinkContainer>
                <Button onClick={() => { this.setState({showModalDelete: true, deviceId: row.value}); }} className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                </div>
              )
            }
          ]}
          defaultPageSize={10}
          className="-striped"/>

        <Modal show={this.state.showModalDelete} onHide={() => {this.closeModalDelete() }}>
          <Modal.Header closeButton>
            <Modal.Title>Eliminar dispositivo {this.state.deviceId}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>¿Estás seguro de eliminar este dispositivo?</p>
            <p>Todas las programaciones para este dispositivo serán anuladas</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => { this.deleteDevice() }} className="btn btn-info">
              Eliminar
            </Button>
            <Button onClick={() => {this.closeModalDelete() }} className="btn btn-default">
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default DevicesList;
