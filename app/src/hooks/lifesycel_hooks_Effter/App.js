import React, { Component } from 'react'

export class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    

componentDidMount(){



}


componentDidUpdate(){



}

    render() {
        return (
            <div>
                <button onClick={()=> this.setState({count:this.state.count + 1})}>
items {this.state.count}

                </button>
            </div>
        )
    }
}

export default App

