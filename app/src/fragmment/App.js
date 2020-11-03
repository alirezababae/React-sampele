import React, { Component , Fragment } from 'react'



const a = 12;

const Err = ()=>{

return(
<Fragment>


<div>

hi error

</div>

<div>

hi error exit

</div>

<div>

hi error deenger

</div>



</Fragment>


)

}


export class Fragmentapp extends Component {
    render() {
        
if (a===22) {
    
return(
<h2>ok</h2>

)

}else{

return(

<Err></Err>

)
    
}

    }
}

export default Fragmentapp
