import React, { Component } from 'react';
import { Col, Row, Legend } from 'react-bootstrap';
import './styles/Home.css';
import { getHouses } from '../API/methods';
import ReactTable from 'react-table';
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
              Header: "URL",
              accessor: "url"
            }
          ]}
          defaultPageSize={10}
          className="-striped -hightlight"/>
        </div>
    );
  }
}

export default Home;
