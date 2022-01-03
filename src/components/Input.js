import React from "react";


class Input extends React.Component{
    constructor(props){
        super(props);
        this.inputref=React.createRef();
    }

    focusInput(){
        this.inputref.current.focus();
    }


    render(){
        return(
            <div>
                <input type="text" ref={this.inputref}></input>
            </div>
        )
    }
}

export default Input