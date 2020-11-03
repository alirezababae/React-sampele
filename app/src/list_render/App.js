import React from 'react'


function App() {
    
const name = ['brons','horuns','podff']



/*

// const it = name.map((items)=>{

// return(
// <div>

// {items}

// </div>

// )

// })

*/


// map array list


// const ret = name.map((item => <h2>{item}</h2>))

// return<div>{ret}</div>






// obkect map list 



const list = [

{

name:'alex',
id:1,
age:24
},

{
    name:'miscal',
    id:2,
    age:33

},



]





const ja = list.map(listitems => (<h2>name : {listitems.name} id : {listitems.id}  age : {listitems.age} </h2>))

return(

<div>

{ja}


</div>

)


}


export default App
