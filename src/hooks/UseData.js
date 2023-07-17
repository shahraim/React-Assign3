import React from 'react'
import { useContext } from 'react'
import { CentralBase } from '../contexts/DataProvider'

function UseData() {
    return useContext(CentralBase)
}

export default UseData