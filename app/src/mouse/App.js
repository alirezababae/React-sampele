import React, { Component } from 'react'
import Clickcomp from './clickcomp'
import Hovercomp from './Hovercomp'

class App extends Component {
    render() {
        return (
            <div>
                <Clickcomp/>
                <Hovercomp/>
            </div>
        )
    }
}

export default App
