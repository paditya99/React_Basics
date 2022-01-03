import React from "react";

class RefDemo extends React.Component{
    constructor(props){
        super(props);
        this.inputref=React.createRef();
    }
    componentDidMount(){
        this.inputref.current.focus();
    }

    passvalue=()=>{
        alert(this.inputref.current.value);
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.inputref}></input>
                <button onClick={this.passvalue}>Click</button>
            </div>
        )
    }
}

export default RefDemo