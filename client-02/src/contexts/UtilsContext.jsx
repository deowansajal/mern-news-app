import { createContext, useContext, useState } from 'react'

// create a auth context provider
export const UtilsContext = createContext()

export const useUtils = () => useContext(UtilsContext)

// create a auth context provider
export const UtilsProvider = ({ children }) => {
    const token = localStorage.getItem('token')
    const hasToken = token && token !== 'undefined' && token !== null
    const [isAuthenticated, setIsAuthenticated] = useState(hasToken)
    const [openDialog, setOpenDialog] = useState(false)

    const handleClickDialogOpen = () => {
        setOpenDialog(true)
    }

    const handleDialogClose = () => {
        setOpenDialog(false)
    }

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        openDialog,
        handleClickDialogOpen,
        handleDialogClose,
    }

    return (
        <UtilsContext.Provider value={value}>{children}</UtilsContext.Provider>
    )
}
