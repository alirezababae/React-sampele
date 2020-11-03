import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import Plus from './Component/Plus'
import Maines from './Component/Maines'




function App() {
    return (

<Provider store={store}>

<Plus/>
<Maines/>
</Provider>


    )
}

export default App
