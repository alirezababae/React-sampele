import React, { Component } from 'react'

class Clickcomp extends Component {
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

this.setState(prevState =>{

return {count : prevState.count + 1}

})

}
// incatecount (){
//     this.setState({
    
//     count:this.state.count + 1
    
//     })


// console.log(this.state.count);



    render() {
const {count} = this.state
        return (
            <div>
                

                <button onClick={this.incatecount}>

                    cliked {count} items
                </button>
                {this.state.count}
            </div>
        )
    }
}

export default Clickcomp


