import React, { Component } from 'react'
// import {createStore} from 'redux'


class App extends Component {

    render() {

        const {value , onCreate , onMaines} = this.props

        return (
            <div>


                {/* <p>

                    {this.props.value}
                </p>

                <button onClick={this.props.onCreate}>Add</button>
                <button onClick={this.props.onMaines}>Maines</button> */}
 <p>

{value}
</p>

<button onClick={onCreate}>Add</button>
<button onClick={onMaines}>Maines</button>

            </div>
        )
    }
}

export default App
