import React, { Component } from 'react'

import axios from 'axios'

class postlist extends Component {

constructor(props) {
    super(props)

    this.state = {
         post:[],
         errormaseges:''
    }
}


componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => {
console.log(response);

this.setState({post:response.data})


})
.catch(error => {

console.log('error get data');
this.setState({errormaseges:'error get data'})
})
}

    render() {

        const {post , errormaseges} = this.state

        return (
            <div>
                Postlist

{

post.length ? post.map(items => <div> 
    
    
    <ul>

<li>id : {items.id} name: {items.title} </li>
    
    
    
    </ul> 
    
    
    </div> ):

null


}
{errormaseges ? <div> {errormaseges} </div> : null}

            </div>
        )
    }
}

export default postlist
