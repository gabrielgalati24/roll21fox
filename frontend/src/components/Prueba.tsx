import {  useEffect,useCallback, useState, useRef, createRef  } from "react"
import { io} from "socket.io-client"
import Draggable from 'react-draggable';
import './prueba.css';


interface Socket {
    on(event: string, callback: (data: any) => void ):any;
    emit(event: string, data: any):any;
}

interface Position{
    x:number,
    y:number
}
 interface Canvas{
    canvasWith:number
    canvasHeight:number
 }


export default function Prueba(props: { x: number, y: number, id:number }){
//  const objecto =createRef(null)
    const [dimensions, setDimensions] = useState(null);
        let canvasWith  = 500
        let canvasHeight = 500
        const [socket, setSocket] = useState<Socket>()
        const[pos,setpos] = useState<Position>({
            x:props.x,
            y:props.y
        })

        // const callBackRef = useCallback(domNode => {
        //     if (domNode) {
        //       setDimensions(domNode.getBoundingClientRect());
        //     }
        //   }, []);
        useEffect(() => {
        // const s:any = io("https://futanarichatfox.herokuapp.com/")
        const s:any = io("http://localhost:3001")
        setSocket(s)
    
        return () => {
          s.disconnect()
        }
      }, [])






useEffect(()=>{
// console.log(objecto.current?.getBoundingClientRect())

    if (socket == null || socket === undefined  ) return
    socket.on('prueba1',(delta:any)=>{
        // console.log('enviando',delta)
        if(delta.id !== props.id) return

    console.log(delta.id,"  ", props.id)
setpos({
    x:delta.pos.x,
    y:delta.pos.y
})

    })

},[socket])



       const handleStop=(e:any)=>{
// console.log(e)
let posicionX:number = e.layerX - e.offsetX
let posicionY:number = e.layerY - e.offsetY
        //    setPx(e.clientX -e.offsetX)
        //    setPy(e.clientY -e.offsetY)
        if( posicionX  > canvasWith || posicionY > canvasHeight) return
        setpos({
            x:posicionX,
            y:posicionY
        })
        if (socket == null || socket === undefined ) return
        socket.emit("prueba",{
            id:props.id,
             pos:{
                x:posicionX,
                y:posicionY
             }
        })


                }
                const handleStop1=(e:any)=>{
                    let fixedElem = document.createElement('div');
                    fixedElem.style.cssText = 'position:fixed; top: 0; left: 0';
                    document.body.appendChild(fixedElem);
                    const rect = fixedElem.getBoundingClientRect();
                    document.body.removeChild(fixedElem);
                    // console.log(rect)
         
                         }
 

return(
        <div>



<Draggable
   onStop={(e) =>handleStop(e)}
   onDrag={(e) =>handleStop1(e)}
//    grid={[25, 25]}
   position={pos}
   >


      {/* <div className="p darg" ref={callBackRef}> */}
      <div className="p darg">
        <img draggable="false"  className="imagenPer" src="https://i.pinimg.com/564x/dc/a0/4d/dca04d1d0f1e45385b9ce1db19b754a9.jpg" alt=""/>
      </div>
      </Draggable>

        </div>
    )
}
