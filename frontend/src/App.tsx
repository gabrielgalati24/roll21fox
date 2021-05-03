import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Prueba from './components/canvas'
import Navbar from './components/Navbar'
import Login from './pages/Login'
function App() {
  return (
    <Router>
      <div>
 <Navbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Prueba/>
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
