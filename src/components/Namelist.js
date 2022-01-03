import React from "react";
import Person from "./Person";
function Namelist(){
    


    var persons=[
        {
            id: 1,
            name: "aditya",
            age: 22,
            
        },
        {
            id: 2,
            name: "rahul",
            age: 24
        },
        {
            id: 3,
            name: "shivam",
            age: 20
        }
    ]
    var personlist=persons.map(person => <Person key={person.id} person={person}></Person>)
    return(
        <div>
          
            {
                
                  personlist
                  
            }
          
        </div>
    )
}
export default Namelist