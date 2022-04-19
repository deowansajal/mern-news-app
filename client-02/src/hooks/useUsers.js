import { useQuery } from 'react-query'
import { API } from '../api'

export const useUsers = () => useQuery('users', API.getUsers)
