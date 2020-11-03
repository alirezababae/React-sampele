import React, { Component } from 'react'

class Hovertow extends Component {
    
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
                <button onMouseOver={this.createcount}>mouse hover {count}</button>
        <h2>{count}</h2>
            </div>
        )
    }
}

export default Hovertow
