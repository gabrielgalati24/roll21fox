import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './canvas.css';
import Prueba from './Prueba'

interface PositionFurry{
  id:number,
  x:number,
  y:number
}

let posicionesCanvas: Array<PositionFurry> = [
  {
  id:1,
  x:30,
  y:30
},
{
  id:2,
  x:30,
  y:30
},
{
  id:3,
  x:30,
  y:30
},
];
function Canvas() {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useState<number>(ref.current?.clientWidth ? ref.current.clientWidth : 100 )
  const y = useState<number>()

  const sd = ()=>{
    // console.log(ref)
  }
  return (
   <div className="canvas_main"  ref={ref} >

    {
      posicionesCanvas.map((angelDust)=>{

return(
  <Prueba
  key={angelDust.id}

  x={angelDust.x}
  y={angelDust.y}
  id={angelDust.id}
  ></Prueba>
)
      })
    }

{/* <button onClick={sd}></button> */}
   </div>
  );
  
}
/*
offsetHeight
clientWidth
offsetTop
*/
export default Canvas;
