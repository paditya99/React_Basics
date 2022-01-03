import React from "react";

class Errorhandle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError: false
        }

    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    render(){
        if(this.state.hasError){
            return <h4>Something went wrong</h4>
        }
        return this.props.children
    }
}

export default Errorhandle