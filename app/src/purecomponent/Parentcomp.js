import React, { Component } from 'react'
import Regcomp from './Regcomp'
import Puercomp from './Puercomp'
export class Parentcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        name:'valoins'     
        }
    }

    componentDidMount(){

setInterval(()=>{

this.setState({
name:'ddd'

})
},2000)

    }
    

    render() {
        return (
            <div>
                Parentcomp
                <Regcomp name={this.state.name}></Regcomp>
            <Puercomp name={this.state.name}></Puercomp>
            </div>
        )
    }
}

export default Parentcomp
