import React, { Component } from 'react'
import  styless from './App.css'

 class Hovercomp extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    incatecount = ()=>{
    // this.setState({
    
    // count:this.state.count + 1
    
    // })
    
setInterval(() => {
    
    this.setState(prevState =>{
    
        return {count : prevState.count + 1}
        
        })

}, 1000);
    
    }

    render() {
        const {count} = this.state
        return (
            <div>
<h2 className="main" onMouseOver={this.incatecount}>items : {count} </h2>                
            </div>
        )
    }
}

export default Hovercomp
