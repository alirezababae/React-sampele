import React from 'react'
import {connect} from 'react-redux'



function Maines(props) {
    return (
        <div>

            <button onClick={props.Mainesof}>Maines</button>
            
        </div>
    )
}

// const StateMines = dispatch => {

// return{

// Maines: ()=> {dispatch({type:'Maines'})}

// }


// } 

const mapDispatchToProps = dispatch => {

return{

Mainesof: ()=> {dispatch({type:'Maines'})}

}

} 

export default connect(null,mapDispatchToProps)(Maines)
