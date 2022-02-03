import React from "react";
import Postlist from "./Postlist";
import axios from "axios";

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId: '',
            title: '',
            body: ''
        }
    }

    changehandler=(event)=>{
        this.setState({
            [event.target.name]: event.target.value

        })
    }
    submithandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        const {userid,title,body}=this.state
        return(
           <form onSubmit={this.submithandler}>
               <div>
                 <input type="text" name="userId" onChange={this.changehandler}></input>
               </div>
               <div>
                 <input type="text" name="title" onChange={this.changehandler}></input>
               </div>
               <div>
                 <input type="text" name="body" onChange={this.changehandler}></input>
               </div>
               <div>
                   <button type="submit">Submit</button>
               </div>
           </form>
        )
    }
}

export default PostForm