import React from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends React.Component{
    render(){
        return(
            <UserConsumer>
                {
                    (name)=>{
                        return <h1>Hello {name}</h1>
                    }
                    
                }
            </UserConsumer>
        )
    }
}

export default ComponentF