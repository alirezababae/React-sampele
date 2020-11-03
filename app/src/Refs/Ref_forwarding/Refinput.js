import React from 'react'

// function Refinput() {
//     return (
//         <div>
//             <input type="text"></input>
//         </div>
//     )
// }

constructor() {
    super()

   this.handelsubmit = this.handelsubmit.bind(this)
}


const Refinput = React.forwardRef((props,ref)=>{


    
    return (
      <form onSubmit={this.handelsubmit}>

<div>
            <input type="text" ref={ref} value={props}></input>
        </div>

      </form>
    )

})




export default Refinput
