import React, { Component } from 'react'
import {Getdata} from './Context'
import B from './B'
class A extends Component {



    

    render() {
        return (
            <div>
<Getdata>

{

(statey)=> {

 return statey.post.map(items=>(<div>{items.id}</div>))


}

}

</Getdata>

<B></B>
            </div>
        )
    }
}

export default A
