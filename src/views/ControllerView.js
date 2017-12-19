import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import NavbarContainer from '../containers/NavbarContainer';
import { Button, Col, Row, Modal, Form, FormControl, ControlLabel, FormGroup } from 'react-bootstrap';
import DevicesList from '../components/DevicesList';
import { getController } from '../API/methods';
import { createDevice } from '../API/methods';

class ControllerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controller: {},
      isLoading: false,
      showModalCreate: false,
      nameDevice: "",
      nameDeviceValid: false,
      formErrors: {nameDevice: ""},
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
    let nameDeviceValid = this.state.nameDeviceValid;

    switch (fieldName) {
      case 'nameDevice':
        nameDeviceValid = value.length > 0;
        fieldValidationErrors.nameDevice = nameDeviceValid ? '' : ' es demasiado corto';
        break;
      default:
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
                  nameDeviceValid: nameDeviceValid,
                }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameDeviceValid});
  }

  getController() {
    getController(this.props.match.params.id, this.props.match.params.idController)
    .then((controller) => {
      this.setState({controller: controller, isLoading: false});
    })
    .catch((error) => {
      console.log("Error retrieving data from server");
    });
  }

  createDevice() {
    createDevice({token: this.props.user.token, houseId: this.props.match.params.id,
      controllerId: this.props.match.params.idController, nombre: this.state.nameDevice})
      .then((response) => {
        console.log(response)
        this.closeModalCreate();
        this.getController();
        this.setState({isLoading: true});
      })
  }

  closeModalCreate() {
    this.setState({showModalCreate: false});
  }

  componentWillMount() {
    this.setState({isLoading: true}, function () {
      getController(this.props.match.params.id, this.props.match.params.idController)
      .then((controller) => {
        this.setState({controller: controller, isLoading: false});
      })
      .catch((error) => {
        console.log("Error retrieving data from server");
      }
      )});
  }

  render() {
    return (
      <div>
        <NavbarContainer/>
        { this.state.isLoading ? null :
        <Col md={12}>
          <h2>Controlador <small>{this.state.controller.nombre}</small>
            <Button onClick={() => { this.setState({showModalCreate: true}) }} className="btn btn-primary margin-left">
              Añadir dispositivo</Button>
          </h2>
            <DevicesList {...this.props} devices={this.state.controller.dispositivos}
              houseId={this.state.controller.casa_id} controllerId={this.state.controller.id}/>
        </Col>
        }

        {/* Modal Create */}
        <Modal show={this.state.showModalCreate} onHide={() => {this.closeModalCreate() }}>
          <Modal.Header closeButton>
            <Modal.Title>Crear dispositivo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
            <FormGroup>
              <ControlLabel>Tipo</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="temperatura" selected="true">Temperatura</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Nombre</ControlLabel>
                <FormControl type="text" name="nameDevice" onChange={this.handleUserInput} placeholder="Nombre dispositivo"/>
            </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => { this.createDevice() }} className="btn btn-info"
              disabled={!this.state.formValid}>
              Crear
            </Button>
            <Button onClick={() => { this.closeModalCreate() }} className="btn btn-default">
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ControllerView;
