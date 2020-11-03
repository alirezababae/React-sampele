import React, { Component } from 'react'

const Temp  =  (props)=>{
console.log('Temp');

return(

<div>

{props.val}

</div>

)

}
export class App extends Component {

    state = {

val:1
}

componentDidMount(){
console.log('componentDidMount');

setInterval(() => {
    
this.setState({

    val:Math.random()

})

}, 2000);

}

shouldComponentUpdate(nextProp , nextState){
    console.log('shouldComponentUpdate');
    
console.log('next state', nextState);
console.log('state',this.state);

return(this.state === nextState ? false:true)



}

    render() {

        console.log('App');
        
        return (
            <div>
                <Temp val={this.state.val}></Temp>
            </div>
        )
    }
}

export default App
