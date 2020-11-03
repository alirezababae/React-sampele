import React, { Component } from 'react'

export class Event extends Component {

handler(){

console.log(this);

    
}

    render() {
        return (
            <div>
                <button onClick={this.handlerbind(this)}>bind</button>
            </div>
        )
    }
}

export default Event
