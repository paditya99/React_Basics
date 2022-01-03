import React from "react";

function Person({person}){
    return (
    <div>
       <h4>My name is {person.name}. I am {person.age} years old.</h4>
    </div>
    )
}
//const Greetme=()=> <h1>pathak aditya pk</h1>
export default Person