import React, { Component } from 'react'

export class Test_state2 extends Component {


constructor(props){

super(props)

this.state = {

    count:0


}

}

Add(){

    

this.setState({

count : this.state.count + 1

},console.log('colback' + this.state.count))



}

Addsum(){

this.Add()

}




    render() {
        return (
            <div>
                
        <p>Number : {this.state.count}</p>

<button  onClick={() => this.Addsum(22)}>Add</button>

            </div>
        )
    }
}

export default Test_state2
