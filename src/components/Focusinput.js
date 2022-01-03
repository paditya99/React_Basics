import React from "react";
import Input from "./Input";

class Focusinput extends React.Component{
    constructor(props){
        super(props);
        this.focusref=React.createRef();
    }

    clickhandler=()=>{
        this.focusref.current.focusInput();
    }

    render(){
        return(
            <div>
                <Input ref={this.focusref}></Input>
                <button onClick={this.clickhandler}>Focus Input</button>
            </div>
        )
    }
}

export default Focusinput