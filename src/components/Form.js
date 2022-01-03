import React from "react";

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username: '',
            topic: 'React',
            data: 'dummy text'
        }
        
    }
    changeusernamehandler= (event)=>{
        this.setState({
            username: event.target.value
            
        })
    }
    topicchangehandler=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }

    datasubmithandler=(event)=>{
        
       alert(`${this.state.username} ${this.state.topic}`)
       event.preventDefault();
       
    }
   
    render(){
        return(
            <form>
                <React.Fragment>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.changeusernamehandler}></input>
                <div>
                <select value={this.state.topic} onChange={this.topicchangehandler}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
                <button type="submit" onClick={this.datasubmithandler}>Submit</button>
               
                </div>
                </React.Fragment>
            </form>
        )
    }
}
export default Form