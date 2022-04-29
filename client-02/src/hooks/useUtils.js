import { useContext } from 'react'
import { UtilsContext } from '../contexts/UtilsContext'
export const useUtils = () => useContext(UtilsContext)
