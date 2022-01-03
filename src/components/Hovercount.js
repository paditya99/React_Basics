import React from "react";
import withCounter from "./withCounter";



class Hovercount extends React.Component{
   
    render(){
        const {count,incrementhover}=this.props
        return(
            <div>
                <h1 onMouseOver={incrementhover}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default withCounter(Hovercount,4)