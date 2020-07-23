import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import ManagePlayers from './views/ManagePlayers';
import DeleteConfirmation from './components/DeleteConfirmation';

function App() {
  return (
    <div className="App">
      <Router>
        <ManagePlayers path="/players/list" subview="List"/>
        <ManagePlayers path="/players/addplayer" subview="AddPlayer"/>
        <DeleteConfirmation path="/"/>
      </Router>
      
    </div>
  );
}

export default App;
