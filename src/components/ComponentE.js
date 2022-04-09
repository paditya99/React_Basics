import React, {useContext} from "react";
import ComponentC from "./ComponentC";
import ComponentF from "./ComponentF";
import userContext, { UserProvider, UserConsumer } from "./userContext";
function ComponentE(){
    
    const name=useContext(userContext)
        return (
            <div>
            
            Component E {name}
            <ComponentF></ComponentF>
            </div>
        )
            
    }
    

ComponentE.contextType=userContext
export default ComponentE