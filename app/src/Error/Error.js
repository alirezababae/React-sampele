import React, { Component } from 'react'

export class Error extends Component {
    

constructor(props) {
    super(props)

    this.state = {
         hasError:false
    }
}


    static getDerivedStateFromaError(err){

return {
hasError true

}
    }

    
    
    render() {

        return (
            <div>
                
                
            </div>
        )
    }
}

export default Error

