import React, { Component } from 'react'
import Refinput from './Refinput'

export class Refparentinput extends Component {
  constructor(props) {
      super(props)
  
      this.inputRefs = React.createRef()
this.state = {

    val:''

}


  }
//   componentDidMount(){

// console.log(this.inputRefs);


//   }

handelRefs = ()=>{

this.inputRefs.current.focus()

this.setState({val:this.inputRefs.current.value})
}





  
    render() {
         console.log(this.state.val);
        
        return (
            <div>
                <Refinput ref={this.inputRefs} value={this.inputRefs}/>
                <button onClick={this.handelRefs}>Focus in put</button>
            </div>
        )
    }
}

export default Refparentinput
