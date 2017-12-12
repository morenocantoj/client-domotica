import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginView from "../containers/LoginContainer";
import HomeView from "../containers/HomeContainer";

const Router = (props) => (
  <BrowserRouter>
    <div>
      <Route exact path="/login" component={LoginView}/>
      <Route exact path="/" component={LoginView}/>
      <Route exact path="/home" component={HomeView}/>
    </div>
  </BrowserRouter>
)

export default Router
