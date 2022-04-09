import React, { useEffect } from "react";
import axios from "axios";

function HooksFetchdata(){

    const [post, setpost]=React.useState({})
    const [id,setId]= React.useState(1)
    const [idfromButton, setidfromButton] =React.useState(1)


    const clickhandler=()=>{
        setidfromButton(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfromButton}`)
        .then(res=>{
            setpost(res.data)
        })
        .catch(err=>{
            console.log(err)
        },[idfromButton])
    })


return(
    <div>

        <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
        <button onClick={clickhandler}>Fetch data</button>
       <div>{post.title}</div>
    </div>
)


}

export default HooksFetchdata