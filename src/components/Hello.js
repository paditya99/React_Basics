import React from "react";

const Hello=()=>{
    return React.createElement('div',{id: 'self',className: 'selfclass2'}, 
    React.createElement('h1',null,'Hello world2'))
}
export default Hello