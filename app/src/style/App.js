import React from 'react'
import styless from './App.css'


// export class App extends React.Component {
   
// // constructor(){

// //   this.state = {

// // h2:{

// //     backgroundColor: 'burlywood',

// //     width: '100%',
    
// //     fontSize: '15px',
    
// //     color: 'cyan'

// // }

// // }

// // }   
//     render() {
//         return (
//             <div>
//                 <h2 className="css-file"> 
// style in file css

//                 </h2>
//             </div>
//         )
//     }
// }

const style = {

fontSize:'30px',
color:'blck',
backgroundColor:'seagreen'
}

const styleerr = {

    fontSize:'30px',
    color:'blck',
    backgroundColor:'red'
    }

var a = 222

function Appfun(){

if(a == 22){

    return (

        <h2 style={style}>style is js</h2>
        
        )
}else{


    return (

        <h2 style={styleerr}>style is js</h2>
        
        )
}

}


export default Appfun
