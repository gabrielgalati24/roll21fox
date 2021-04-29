import React  from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './canvas.css';
import Prueba from './Prueba'

function Canvas() {
  const ref = React.useRef<HTMLDivElement>(null);

  const sd = ()=>{
    console.log(ref)
  }
  return (
   <div className="canvas_main"  ref={ref} >
<Prueba></Prueba>
<button onClick={sd}></button>
   </div>
  );
  
}
/*
offsetHeight
clientWidth
offsetTop
*/
export default Canvas;
