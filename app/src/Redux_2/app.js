import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/cake/store'
import CakeContainer from './component/cakeContainer'

function App() {
    return (

        <Provider store={store}>


            <div>
                
                <CakeContainer />


            </div>



        </Provider>

    )
}

export default App
