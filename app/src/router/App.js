import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import Nav from './nav'
import List from './List'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav/>
                    {/* <About></About>
                <Home></Home> */}
                    <Route path="/about" component={About} />
                    <Route path="/homeing" component={Home} />
                    <Route path="/list" component={List} />

                </div>
            </Router>
        )
    }
}



export default App
