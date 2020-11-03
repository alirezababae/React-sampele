import conterReducer from './conter'

import loggedReducer from './islogged'
import { combineReducers } from 'redux'


const AllReducer = combineReducers({


   conter: conterReducer,

   logged:loggedReducer


})

export default AllReducer