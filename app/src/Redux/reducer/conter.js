const  conterReducer = ( state  = 0 , actions )=>{

    switch(actions.type){

    case 'Plus':

    return state + 1

    case 'Maines':

    return state - 1

    default:
        return state

}
}


export default conterReducer