import {  useEffect, useState } from "react"
import { io} from "socket.io-client"
import Draggable from 'react-draggable';



interface Socket {
    on(event: string, callback: (data: any) => void ):any;
    emit(event: string, data: any):any;
}



export default function Prueba(){

        const [Px, setPx] = useState(10)
        const [Py, setPy] = useState(10)
        const [socket, setSocket] = useState<Socket>()
        const[pos,setpos] = useState({
            x :Px,
            y:Py
        })

        useEffect(() => {
        // const s:any = io("https://futanarichatfox.herokuapp.com/")
        const s:any = io("http://localhost:3001")
        setSocket(s)
    
        return () => {
          s.disconnect()
        }
      }, [])

useEffect(()=>{

    if (socket == null || socket === undefined ) return
    socket.on('prueba1',(delta:any)=>{

        setPx(delta.positionx)
                setPy(delta.positiony)
    })

})



       const handleStop=(e:any)=>{

           setPx(e.clientX -e.offsetX)
           setPy(e.clientY -e.offsetY)
        // setpos(Px,Py)
        if (socket == null || socket === undefined ) return
        socket.emit("prueba",{
            id:1,
            positionx:e.clientX -e.offsetX,
            positiony:e.clientY -e.offsetY
        })


                }
 
var pos1= {
    x :Px,
    y:Py
}
return(
        <div>



<Draggable
   onStop={(e) =>handleStop(e)}
   position={pos1}
   >


      <div className="p">
        <img draggable="false"  className="imagenPer" src="https://i.pinimg.com/564x/dc/a0/4d/dca04d1d0f1e45385b9ce1db19b754a9.jpg" alt=""/>
      </div>
      </Draggable>

        </div>
    )
}
