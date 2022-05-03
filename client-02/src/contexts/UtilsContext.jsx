import { createContext, useState } from 'react'
import { useGetMe } from '../hooks/useGetMe'
import { localDB } from '../utils/localDB'

// create a auth context provider
export const UtilsContext = createContext()

// create a auth context provider
export const UtilsProvider = ({ children }) => {
    const token = localDB.getToken()
    const hasToken = token && token !== 'undefined' && token !== null
    const [isAuthenticated, setIsAuthenticated] = useState(!!hasToken)

    const [openDialog, setOpenDialog] = useState(false)

    const [openSidebar, setOpenSidebar] = useState(false)

    const handleClickDialogOpen = () => {
        setOpenDialog(true)
    }

    const handleDialogClose = () => {
        setOpenDialog(false)
    }

    const handleClickSidebarOpen = () => {
        setOpenSidebar(true)
    }

    const handleSidebarClose = () => {
        setOpenSidebar(false)
    }

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        openDialog,
        handleClickDialogOpen,
        handleDialogClose,
        openSidebar,
        handleClickSidebarOpen,
        handleSidebarClose,
    }

    return (
        <UtilsContext.Provider value={value}>{children}</UtilsContext.Provider>
    )
}
