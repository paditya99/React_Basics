import React from "react";
import Lifecyclechild from "./Lifecyclechild";

class Lifecycle extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name: 'Aditya'
        }
        console.log('LifecycleA constructor');
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }
    
    componentDidMount(){
        console.log('LifecycleA componentDidMount');
    }
    

    render(){
        console.log('LifecycleA rendered')
        return(
            <div>
                <Lifecyclechild></Lifecyclechild>
            <div>
                Lifecycle A
            </div>
            
            </div>
        )
    }
}

export default Lifecycle