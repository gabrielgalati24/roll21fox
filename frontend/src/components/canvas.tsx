import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './canvas.css';
import Prueba from './Prueba'

function Canvas() {
  return (
   <div className="canvas_main">
<Prueba></Prueba>
   </div>
  );
}

export default Canvas;
