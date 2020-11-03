import React from 'react'

const UserContext = React.createContext()

// create Context


const UserProvider = UserContext.Provider

const UserConsumer = UserContext.Consumer 

// export Context


export {UserProvider , UserConsumer}