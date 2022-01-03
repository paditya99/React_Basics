import React from 'react'

class Welcomeme extends React.Component{
    render(){
        return <h1>I am a class component. I am {this.props.name}</h1>
    }
}

export default Welcomeme