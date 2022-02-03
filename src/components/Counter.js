import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count: 0 //initialising
        }
    }
    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // },
        // ()=>console.log(this.state.count)
        // )
        
        this.setState((prevstate)=>({
            count: prevstate.count +1
        }))
        
     }
     incrementfive(){
         this.increment();
         this.increment();
         this.increment();
         this.increment();
         this.increment();
     }


    render(){
        return (
            <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={()=> this.incrementfive()}>Increase</button>
        </div>
        )
    }
}

export default Counter