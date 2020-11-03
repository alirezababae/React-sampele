import React  from 'react'

export class App extends React.Component {

    constructor(props){

        super(props);

        this.state = {

       change:false

        }
    }



    render() {
if (this.state.change === true) {
    
return(
<h2>trye</h2>

)

}else{

return(

    <p>false</p>
)

}

    }
}

export default App
