import React from 'react';
import './App.css';
import LeftBlock from './LeftBlock/LeftBlock'
import RightBlock from './RightBlock/RightBlock'
import CreateListName from './components/CreateListName/CreateListName'

function App() {
  return (
  <div className="container">
    <LeftBlock/>
    <RightBlock/>
    <CreateListName/>
  </div>)
}

export default App;
