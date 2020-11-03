import React, { Component } from 'react'
import {Getdata} from './Context'
import  './App.css'
class C extends Component {



    

    render() {
        return (
            <div>
<Getdata>

{

(statey)=> {

 return statey.post.map(items=>(<div className="bodyy">{items.body}</div>))


}

}

</Getdata>

            </div>
        )
    }
}

export default C
