import React from "react";
import Childcomponent from "./Childcomponent";
class Parentcomponent extends React.Component{
        constructor(props){
            super(props);
            this.state={
                parentname: 'Parent'
            }
            this.greetparent=this.greetparent.bind(this);
        }

        greetparent(childname){
            
                alert('Hello '+this.state.parentname + " from "+childname)
            
        }

    render(){
        return (
            <div>
                <Childcomponent greethandler={this.greetparent}></Childcomponent>
            </div>
        )
    }
}

export default Parentcomponent