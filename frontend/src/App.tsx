import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Prueba from './components/Prueba'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>

            <li>
              <Link to="/about">About</Link>
            </li>
       
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Prueba/>
          </Route>
 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
