import React from 'react'



// component functions 



 export const Name = ()=>{ //arrow function component 


    return(
    
    <div>
    
    loding...
    
    </div>
    
    )
    
    }


    //functions

export default  function Fun(props) {
    console.log(props);
    
return(

<div>

<ul>

<li>2</li>
<li>4</li>
<li>6</li>
<li>2</li>
<li>4</li>
<li>{props.name}</li>

</ul>


</div>

)


}
