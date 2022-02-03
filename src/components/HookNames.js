import React,{useState} from "react";

function HookNames() {
    
    const [initialname,setname]=useState({firstname: '', lastname: ''})
    

   
    return(
        <div>
            <br></br>
            <input type="text" placeholder="Firstname" value={initialname.firstname} onChange={e=>setname({...initialname,firstname: e.target.value})}></input>
            <input type="text" placeholder="Lastname" value={initialname.lastname} onChange={e=>setname({...initialname,lastname: e.target.value})}></input>
            <h3>{initialname.firstname}, {initialname.lastname}</h3>
            
        </div>
    )
    
}

export default HookNames