import {createStore} from 'redux'

// import Plus from './Component/Plus'
// import Maines from './Component/Maines'

import Reducer from './Reducer/index'


let store = createStore(Reducer)


export default store

