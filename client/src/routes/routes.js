import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import Resorts from '../components/Resorts';
import Brighton from '../components/Brighton';
import Solitude from '../components/Solitude';
import Snowbird from '../components/Snowbird';
import Alta from '../components/Alta';
import Snowbasin from '../components/Snowbasin';
import PowderMountain from '../components/PowderMountain';

export default (
  <Switch>
    <Route component={ Login } path="/" exact />
    <Route component={ Resorts } path='/resorts' />
    <Route component={ Brighton } path='/brighton' />
    <Route component={ Solitude } path='/solitude' />
    <Route component={ Snowbird } path='/snowbird' />
    <Route component={ Alta } path='/alta' />
    <Route component={ Snowbasin } path='/snowbasin' />
    <Route component={ PowderMountain } path='/powderMountain' />
  </Switch>
)