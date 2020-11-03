import React from 'react'

export class App extends React.Component {

constructor(props){
console.log('constarctor');

super(props)

this.state = {

conter:0
}


this.cratecount = ()=>{

this.setState({conter:this.state.conter+1})

}


this.removecount = ()=>{

    if (this.state.conter !== 0) {
        this.setState({conter:this.state.conter-1})
        
    }
    }


}

componentDidMount(){

console.log('did mount');


}

    render() {

console.log('render');


        return (
            <div>
<button type="submit" onClick={this.cratecount}>Add </button>
<hr></hr>
<button type="submit" onClick={this.removecount}>REMOVE </button>


                {this.state.conter}
            </div>
        )
    }
    componentDidUpdate(prveProps,prveState,snaphot){

console.log('component update');


    }

    componentWillUnmount(){

        console.log('unmout');
        
    }
}

export default App
