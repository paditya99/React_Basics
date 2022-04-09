import React from "react";

class Sample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a: '',
            c: ''
            
        }
    }
    changehandler=(e)=>{
        this.setState({
            a: e.target.value,
            
            
        })
    }
    operatorhandler=(e)=>{

        this.setState((prevstate)=>({
            c: prevstate.a,
            a: ''
            
        }))
       
       
      
    }
    equalhandler=(e)=>{
      
        this.setState((prevstate)=>({

           a: parseInt(this.state.c)+parseInt(this.state.a)
        }))
    }

    render(){
        return(
            <div>
                    <input type="text" value={this.state.a} onChange={this.changehandler}></input>
                    <button onClick={this.operatorhandler}>+</button>
                    <button onClick={this.equalhandler}>=</button>
                    
            </div>
        )
    }
}

export default Sample