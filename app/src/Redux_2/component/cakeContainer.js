import React from 'react'
import { connect } from 'react-redux'
import {Cakebuy} from '../redux/cake/index'

function CakeContainer(props) {
    return (
        <div>

            <h2>Number of cake : {props.numof}</h2>
            <button onClick={props.buyckay}>buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        numof: state.numof


    }
}

const mapDispatchToProps = dispatch => {

    return {
        buyckay: () => dispatch(Cakebuy())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)
