import React, { Component } from 'react'

import axios from 'axios'

 class post extends Component {
constructor(props) {
    super(props)

    this.state = {
         userId:'',
         title:'',
         body:''
    }
}

changehandler = (e)=>{
this.setState({[e.target.name]:e.target.value})

}

sunmithandler = (e) => {

e.preventDefault()
console.log(this.state);

axios.post('https://jsonplaceholder.typicode.com/posts',this.state)

.then(response =>{

    console.log(response);
    
})

.catch(error => {

    console.log(error);
    

})

}
    render() {

        const {userId , title , body} = this.state
        return (
            <div>
                
<form onSubmit={this.sunmithandler}>

<div>
<input type="text" value={userId} name="userId" onChange={this.changehandler} ></input>
</div>

<div>
<input type="text" value={title} onChange={this.changehandler} name="title"></input>
</div>

 
<div>
<input type="text" value={body} onChange={this.changehandler} name="body"></input>
</div>
<button type="submit">Add</button>
</form>


            </div>
        )
    }
}

export default post
