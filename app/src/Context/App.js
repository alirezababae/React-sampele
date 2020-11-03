import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './userContext'





class App extends Component {

constructor(props) {
    super(props)

    this.state = {
         name:'ali',
         age:2331,
         pass:'dwe73wydw7e'
    }
}



    render() {
        return (
            <div>
                <UserProvider value={this.state}>
                <ComponentC/>
                </UserProvider>
            </div>
        )
    }
}

export default App
