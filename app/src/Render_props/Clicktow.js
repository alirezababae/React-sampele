import React, { Component } from 'react'
import Hovertow from './hovertow'

class Clicktow extends Component {

constructor(props) {
    super(props)

    this.state = {
         count:0
    }
}


createcount = ()=>{

this.setState(prevState => {

    return {count:this.state.count + 1}

})

}

    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.createcount}>click {count} items</button>
            
            <p>hover</p>
<Hovertow></Hovertow>

            </div>
        )
    }
}

export default Clicktow
