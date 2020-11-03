import React, { Component } from 'react'
import { connect} from 'react-redux'


// class App extends Component {
//     render() {


//         // const {value } = this.props

//         return (
//             <div>
//                 hapii
// {this.props.numof}

//             </div>
//         )
//     }
// }


function Name(props) {
    return(

<div>

    {props.numof}


    <button onClick={props.increment} >Add</button>
</div>

    )
}

const mapStateToProps = state => {

    return {
        numof: state


    }
}


const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      increment: () => {dispatch({type:'Plus'})},
    //   Mines: () => {dispatch({type:'Maines'})}

    
    }
  }

// const Plusstate = dispatch => {

// return{

// Plus:()=> dispatch({type:'Plus'})

// }

// }

export default connect(mapStateToProps , mapDispatchToProps)(Name)
