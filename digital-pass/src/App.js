import React, { Fragment } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './Header/Header'
import Login from './Login/Login'
import TemporaryPass from './TemporaryPass/TemporaryPass'
import PermanentPass from './PermanentPass/PermanentPass'
import RequestFromOrganization from "./RequestFromOrganization/RequestFromOrganization";



function App() {
  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/temporary' component={TemporaryPass}/>
        <Route path='/permanent' component={PermanentPass}/>
        <Route path='/org-request' component={RequestFromOrganization}/>
      </Switch>
    </Fragment>
  )
}

export default App;
