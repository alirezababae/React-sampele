
import { BUY_CAKE } from './cakeType'

const init = {

    numof: 10

}


 const CakeReducer = (state = init, actions) => {

    switch (actions.type) {
        case BUY_CAKE:

            return {

                ...state,
                numof: state.numof - 1
            }
 

        default:
    return state
    }

}

export default  CakeReducer