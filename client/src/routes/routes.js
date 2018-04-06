import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import Resorts from '../components/Resorts';

export default (
  <Switch>
    <Route component={ Login } path="/" exact />
    <Route component= { Resorts } path='/resorts' />
  </Switch>
)