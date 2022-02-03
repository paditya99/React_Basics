import React,{useState} from "react";

function HookCounter() {
    const initialcount=0
    const [initial,opengoogle]=useState("aditya")
    const [count,setCount]=useState(initialcount)

    const incrementThree=()=>{
        for(let i=0;i<3;i++){
            setCount(initialcount=>initialcount+1)
        }
    }
    const decrementTwo=()=>{
        for(let i=0;i<2;i++){
            setCount(initialcount=>initialcount-1)
        }
    }
    return(
        <div>
            <br></br>

            <button onClick={()=>opengoogle(window.open('https://www.google.com'))}>Open Google</button>
            <h1> {count}</h1>
            <button onClick={incrementThree}>Increment by 3</button>
            <button onClick={decrementTwo}>Decrement by 2</button>
            <button onClick={()=>setCount(initialcount)}>Reset</button>
        </div>
    )
    
}

export default HookCounter