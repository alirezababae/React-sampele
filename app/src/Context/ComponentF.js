import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            // <div>
            //     ComponentF
            // </div>

            <UserConsumer>

                {

                    (states) => {

                        return <div>
                            <ul>

                                <li>{states.name}</li>

                            </ul>

                        </div>

                    }

                }

            </UserConsumer>
        )
    }
}

export default ComponentF
