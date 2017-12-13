import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import NavbarContainer from '../containers/NavbarContainer';
import Home from '../components/Home';

class HomeView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user : this.props.user
    }
  }

  render() {
    if(this.props.user === undefined) {
      return (<Redirect to="/login"></Redirect>)
    }
    return (
      <div>
        <NavbarContainer/>
        <Col md={12} lg={12}>
          <Home {...this.props}/>
        </Col>
      </div>
    )
  }
}

export default HomeView;
