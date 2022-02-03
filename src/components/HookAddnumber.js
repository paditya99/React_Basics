import React,{useState} from "react";

function HookAddnumber() {
    
    const [items,setitems]=useState([])
    
    const setitemvalue=()=>{
        setitems([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }

   
    return(
        <div>
           <br></br>
           <button onClick={setitemvalue}>Add item</button>
           <ul>
               {
                   items.map(item=> (<li key={item.id}>{item.value}</li>))
               }
           </ul>
            
        </div>
    )
    
}

export default HookAddnumber