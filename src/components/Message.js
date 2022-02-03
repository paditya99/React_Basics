import React from 'react'

class Message extends React.Component{
        constructor(props){
            super(props);
            this.state={
                message: 'Welcome visitor !!' //initialising
               
            }
            this.msgchange=this.msgchange.bind(this);
            
        }
       

      msgchange(){
          this.setState({
              message: 'Thank you for subscribing me '
          })
      }
     


    render(){
        return (
            <div>
        <h1>{this.state.message}It is {new Date().toLocaleTimeString()}.</h1>
        {/* <button onClick={()=> this.msgchange()}>Subscribe me</button>  */}
        <button onClick={this.msgchange}>Subscribe me</button> 
         
        </div>
        )
    }
}

export default Message