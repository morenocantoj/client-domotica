import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import House from '../components/House';
import ControllersList from '../components/ControllersList';
import NavbarContainer from '../containers/NavbarContainer';
import { Button, Col, Row } from 'react-bootstrap';
import { getHouse } from '../API/methods';

class HouseView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user : this.props.user,
      house: {}
    }
  }

  componentWillMount() {
    getHouse(this.props.match.params.id).then((house) => {
      this.setState({house: house});
    })
    .catch((error) => {
      console.log("¡ERROR!")
    })

  }

  render() {
    console.log("Params: " + this.props.match.params.id)
    if (this.props.user === undefined) {
      return (<Redirect to="/login"/>)
    }
    if (this.state.house === undefined) {
      return null
    }
    return (
      <div>
        <NavbarContainer/>
        <Col md={12}>
          <House house={this.state.house} />
          <ControllersList house={this.state.house}/>
        </Col>
      </div>
    )
  }
}

export default HouseView;
