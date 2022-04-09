import React, {useContext} from "react";
import { UserConsumer } from "./userContext";
import userContext from "./userContext"
import {innerContext} from "../App"

function ComponentF (){

    const outervalue=useContext(userContext)
    const innervalue=useContext(innerContext)

    
        return(
            <div>
                Outer- {outervalue} Inner-{innervalue}
            </div>
        )
        
}


export default ComponentF