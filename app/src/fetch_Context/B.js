import React, { Component } from 'react'
import {Getdata} from './Context'
import C from './C'
class B extends Component {



    

    render() {
        return (
            <div>
<Getdata>

{

(statey)=> {

 return statey.post.map(items=>(<div>{items.title}</div>))


}

}

</Getdata>


<h2>body</h2>
<C></C>
            </div>
        )
    }
}

export default B
