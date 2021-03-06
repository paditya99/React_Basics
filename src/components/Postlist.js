import React from "react";
import axios from "axios";

class Postlist extends React.Component{

    constructor(props){
        super(props);
        this.state={
            posts: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response)
            this.setState({
                posts: response.data,
                errmsg: ''
            })
        })
        .catch((error)=>{
            console.log(error)
            this.setState({
                errmsg: 'Error retrieving data'
            })
        })
    }


    render(){
        const {posts,errmsg}=this.state
        return(
            <div>
                List of Posts
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div> ):
                    
                    null
                }
                {
                    errmsg? <div>{errmsg}</div>: null
                }
            </div>
        )
    }
}

export default Postlist