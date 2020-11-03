import React, { Component } from 'react'

export class App extends Component {
constructor(props) {
    super(props)

    this.inputRef = React.createRef()
}

componentDidMount(){
this.inputRef.current.focus()

}
Alerthan = ()=>{

alert(this.inputRef.current.value)

}

    render() {
        return (
            <div>
                
                <input type="text" ref={this.inputRef}></input>
         <button onClick={this.Alerthan}>Alert</button>
            </div>
        )
    }
}

export default App
