import React from "react";

function Functionclick() {
    function funcn (){
        console.log("fired");
    }


    return(
        <div>
<button onClick={funcn}>clicking</button>
        </div>
    )
}

export default Functionclick
