import React from "react";

const withCounter=(Wrappedcomponent,incrementnumber)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state={
                count: 0
            }
        }
        incrementhover(){
            this.setState((prevstate)=>({
                count: prevstate.count + incrementnumber
            }))
        }



        render(){
            return <Wrappedcomponent count={this.state.count} incrementhover={()=>this.incrementhover()}></Wrappedcomponent>
        }
    }
    return NewComponent
}

export default withCounter