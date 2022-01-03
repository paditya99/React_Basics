import React from "react";

function Greetme(props){
    return (
    <div>
        <h1>Hello {props.name}</h1>
        {props.children}
    </div>
    )
}
//const Greetme=()=> <h1>pathak aditya pk</h1>
export default Greetme