

  const ReducerApp = (state = 2 , action) => {
    switch (action.type) {
        case 'Plus':

          

            return state + 1 

            case 'Maines':

            return state - 1 
        
            default:

            return state
    }
}

export default ReducerApp