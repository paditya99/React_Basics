import React,{useState,useEffect} from "react";

function HookAddnumber() {
    
    const [items,setitems]=useState([])
    const [name,setname]=useState('')

    useEffect(()=>{
        console.log('Updating document title')
        document.title='React Website'
    },[items])

    const setitemvalue=()=>{
        setitems([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }

   
    return(
        <div>
           <br></br>
           <input type="text" value={name} onChange={e=> setname(e.target.value)}></input>
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