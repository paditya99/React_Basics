import React, { useEffect } from "react";

function IntervalHookCounter(){
        const [count,setcount]=React.useState(1)

        useEffect(()=>{
            const interval= setInterval(tick,1000)
        },[])


        const tick=()=>{
            setcount(prevcount=>prevcount+1)
        }
        
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )



}

export default IntervalHookCounter