/*

// Dom React

import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<h1>hi React</h1>,document.getElementById('root'));

*/
/*
import React from 'react'
import ReactDOM from 'react-dom'


function app() {
  
return(

<h1>app</h1>


)

}

ReactDOM.render(<app/>,document.getElementById('root'))

*/




//class functions



/*
import React from 'react';
import ReactDom from 'react-dom';
import {Name} from './functions_component/fun'


function App(){

return(
<div>


<h2>list app</h2>
<Fun/>

</div>
)

}


ReactDom.render(<App/>,document.getElementById('root'));

*/




//class component

/*

import React from 'react'
import ReactDOM from 'react-dom'
import Test from './class_component/Component' // componet class
import Fun from './functions_component/fun'

class App extends React.Component{

    render(){



        return(

<div>

<h2>page  <Test name={22}/>  </h2>


</div>




        )


    }


} 

ReactDOM.render(<App/>,document.getElementById('root'))


*/



//state data 

/*

import React from 'react'
import ReactDOM from 'react-dom'
import Stateing from './state/Test_state'
import Test_state from './state/Test_state'
import Test_state2 from './state/Test_state2'

class App extends React.Component{

render(){


return(


<div>

<Test_state/>
    
</div>


<div>

<Test_state2/>


</div>

)


}

}

ReactDOM.render(<App/>,document.getElementById('root'))
*/

//prpos functions
/*

import React, { Component } from 'react'
import ReactDOM from 'react-dom' 
import Event from './event/event'
export class Index extends Component {
    render() {
        return (
            <div className="App">
                <Event name={22}></Event>
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'))
*/



//lifecycle


// import React  from 'react'
// import ReactDOM from 'react-dom'
// import App from './lifecycle/App'
// import stylecss from './lifecycle/App.css'
// export class Index extends React.Component {
    
//     constructor(props){
// super(props)

// this.state = {

//     show:true


// }


// this.hidden = ()=>{

// this.setState({show:false})

// }

// this.show = ()=>{

//     this.setState({show:true})
    
//     }

//     }
    
//     render() {
//         return (
//             <div>





//                <App/>

// <button className="main" type="submit" disabled={this.state.show}>

// element

// </button>


// <button onClick={this.hidden}>hidden</button>
// <button onClick={this.show}>show</button>


//             </div>
//         )
//     }
// }

// ReactDOM.render(<Index/>,document.getElementById('root'))





// import stylecss from './lifecycle/App.css'
// export class Index extends React.Component {

//     render() {
//         return (
//             <div>
//                <App/>
//             </div>
//         )
//     }
// }



// import {createStore} from 'redux'


// //Store > global 


// //Actions 

// const Plus = ()=>{

//     return{
    
//     type:'Plus'
    
//     }
    
    
//     }




// const Maines = ()=>{

// return{

// type:'Maines'

// }


// }




// //Reducer

// const Conter = (state = 0 , actions ) => {

//     switch (actions.type) {
//         case 'Plus':
//             return state + 1
            
//             // break;
//     case 'Maines':


//     return state - 1

//             // break;
//             // default:
//             //     return state = 0 
//     }


// }
// let store = createStore(Conter)

// // Display it in clonsole 

// store.subscribe(()=> console.log(store.getState()))


// //Dispatch

// store.dispatch(Plus())
// store.dispatch(Maines())


import React  from 'react'
import ReactDOM from 'react-dom'
import App from './Hooks/App'
// import Appr from './Redux_me/App'
// import App from './Redux3/App'

// import {createStore} from 'redux'

// import Conter from './Redux3/App'
// import conter from './Redux3/reducer'


// let store  = createStore(conter)


function Appp(){

return(

<div>

<App/>

</div>

)



}


ReactDOM.render(<Appp/> , document.getElementById('root'))



// const rendering = ()=> ReactDOM.render(<Conter 

//     value={store.getState()}

//     onCreate={()=> store.dispatch({type: 'Create'})}

//     onMaines={()=> store.dispatch({type: 'Maines'})}

// />,document.getElementById('root'))

// rendering()
// store.subscribe(rendering)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAserviceWorker.unregister();
