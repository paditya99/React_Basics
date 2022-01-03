import React from "react";

class Lifecyclechild extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name: 'Aditya'
        }
        console.log('LifecycleChild constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleChild getDerivedStateFromProps');
        return null;
    }

    

    componentDidMount(){
        console.log('LifecycleChild componentDidMount');
    }

    render(){
        console.log('LifecycleChild rendered')
        return(
            <div>
                Lifecycle Child
            </div>
        )
    }
}

export default Lifecyclechild