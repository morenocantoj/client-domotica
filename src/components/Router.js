import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginView from "../containers/LoginContainer";
import HomeView from "../containers/HomeContainer";
import HouseView from "../containers/HouseContainer";
import ControllerView from "../containers/ControllerContainer";

const Router = (props) => (
  <BrowserRouter>
    <div>
      <Route exact path="/login" component={LoginView}/>
      <Route exact path="/" component={LoginView}/>
      <Route exact path="/home" component={HomeView}/>
      <Route exact path="/casas/:id" component={HouseView}/>
      <Route exact path="/casas/:id/controller/:idController" component={ControllerView}/>
    </div>
  </BrowserRouter>
)

export default Router
