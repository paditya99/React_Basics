import React from "react";

class Usergreet extends React.Component{
    constructor(){
        super();
        this.state={
            loggedin: false
            
        }
    }
    login(){
        this.setState({
            loggedin: true
        },()=>console.log('logged in successfully'))
    }
   

    render(){
       var message
        if(this.state.loggedin){
            message=<div>Welcome Aditya bro</div>
        }
        else{
           message=<div>Welcome Guest</div>
        }

        return (
            <div>
                
                <h1>{message}</h1>
                <button onClick={()=>this.login()}>Login</button>
            </div>
        )
       
    }
}

export default Usergreet