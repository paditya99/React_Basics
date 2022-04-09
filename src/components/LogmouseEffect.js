import React, {useState,useEffect} from "react";

function LogmouseEffect(){
    const [x,setX]=React.useState(0)
    const [y,setY]=React.useState(0)

    const logmousePosition=(e)=>{
        console.log('Mouse logged')
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(()=>{
        console.log('Effect called')
        window.addEventListener('mousemove', logmousePosition)

        return()=>{
            console.log('Effect unmounted')
            window.removeEventListener('mousemove',logmousePosition)
        }
    },[])
    return(
        <div>
            MouseCursor Coordinates- X={x} Y={y}
        </div>
    )

}

export default LogmouseEffect