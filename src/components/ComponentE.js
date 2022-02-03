import React from "react";
import ComponentC from "./ComponentC";
import ComponentF from "./ComponentF";
import userContext from "./userContext";
class ComponentE extends React.Component{
    render(){
        return (
            <div>
            
            Component E {this.context}
            <ComponentF></ComponentF>
            </div>
        )
            
    }
    
}
ComponentE.contextType=userContext
export default ComponentE