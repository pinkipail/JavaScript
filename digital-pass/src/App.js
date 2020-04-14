import React, { Fragment } from 'react';
import './App.css';
import Header from './Header/Header'
import Login from './Login/Login'
import TemporaryPass from './TemporaryPass/TemporaryPass'
import PermanentPass from './PermanentPass/PermanentPass'
import RequestFromOrganization from "./RequestFromOrganization/RequestFromOrganization";



function App() {
  return (
    <Fragment>
      <Header/>
      {/*  <Login/> */}
      <TemporaryPass/> 
      {/* <PermanentPass/> */}
      {/* <RequestFromOrganization/> */}
    </Fragment>
  )
}

export default App;
