import React, { Component } from 'react'
import Axios from 'axios'
import {Postdtat} from './Context'
import A from './A'
class App extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            post:[],
             name:'sdsadsd',

            lore:'',

            lore2:''
        }
    }


    componentDidMount = ()=>{

Axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response =>{

// this.setState({post:response.data})

console.log(response.data);

this.setState({post:response.data})

})



    }
    



    render() {

        
        // const {post} = this.state

        return (
            <div>
                
{

// post.map(items=>(<div>{items.id}</div>))

}
<Postdtat value={this.state}>





<A></A>

</Postdtat>


            </div>
        )
    }
}

export default App
