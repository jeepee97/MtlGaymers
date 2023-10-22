import { createContext, useContext, useState } from 'react'

export const userTypes = {
    Undefined: 0,
    Guest: 1,
    Member: 2,
    Admin: 3
}

export const userTypeContext = createContext(userTypes.Member);