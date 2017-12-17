import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import NavbarContainer from '../containers/NavbarContainer';
import { Button, Col, Row } from 'react-bootstrap';
import DevicesList from '../components/DevicesList';
import { getController } from '../API/methods';

class ControllerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controller: {},
      isLoading: false,
    }
  }

  getController() {
    getController(this.props.match.params.id, this.props.match.params.idController)
    .then((controller) => {
      this.setState({controller: controller, isLoading: false});
    })
    .catch((error) => {
      console.log("Error retrieving data from server");
    }
  )
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
          <h2>Controlador <small>{this.state.controller.nombre}</small></h2>
            <DevicesList {...this.props} devices={this.state.controller.dispositivos}
              houseId={this.state.controller.casa_id} controllerId={this.state.controller.id}/>
        </Col>
        }

      </div>
    )
  }
}

export default ControllerView;
