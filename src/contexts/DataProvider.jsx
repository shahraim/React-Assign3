import React from 'react'
import { createContext, useState } from 'react'

const CentralBase = createContext();

function DataProvider({ children }) {

    const [setting, setSetting] = useState();

    return (
        <CentralBase.Provider value={{ setting, setSetting }}>
            {children}
        </CentralBase.Provider>
    )
}

export default DataProvider
export { CentralBase };