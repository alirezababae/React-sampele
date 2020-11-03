import React, { Component } from 'react'

export class App_test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'joni'
        }
    }

    componentDidMount(){


        console.log('did');
        
    }

    componentWillMount(){
if (window.innerWidth < 500) {
    
    this.setState({innerWidth:window.innerWidth})
}
console.log(this.state.name);


    }
    
    
    render() {
        return (

            <div>
                {this.state.name}
                {this.state.innerWidth}
            </div>
        )
    }
}

export default App_test
