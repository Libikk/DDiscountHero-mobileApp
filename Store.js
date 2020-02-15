import React, { useState, createContext } from 'react'

export const UserDataContext = createContext('userData')

const Store = ({ children }) => {
    const [userData, setUserData] = useState(null) 

    return (
        <UserDataContext.Provider value={[userData, setUserData]}>
            {children}
        </UserDataContext.Provider>
    )

}

export default Store;