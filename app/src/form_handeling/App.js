import React, { Component } from 'react'

export class App extends Component {

    constructor(props) {


        super(props)

        this.state = {

            Username: '',
            Content:'',
            Topic:'React'
        }

    }

    handelinginpout(event) {

        this.setState({

            Username: event.target.value

        })


    }


    handelingContent(event){

this.setState({

Content:event.target.value

})

    }

    handlingselect(event){

this.setState({

Topic:event.target.value


})

    }

    render() {
        return (

            <form>

                <div>

                    <label>Username : </label>
                    <input type="text" value={this.state.Username} onChange={this.handelinginpout}></input>
                </div>
<div>
<label>Content</label>
<textarea value={this.state.Content} onChange={this.handelingContent}></textarea>

</div>


<div>

<label>Topic</label>

<select value={this.state.Topic} onChange={this.handlingselect}>

<option value="React">React</option>
<option value="vue">vue</option>
<option value="angular">angular</option>


</select>

</div>
            </form>

        )
    }
}

export default App
