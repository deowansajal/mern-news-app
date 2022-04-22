import { useMutation, useQuery } from 'react-query'
import { API } from '../api'

export const useUsers = () => useQuery('users', API.getUsers)

export const useUserDelete = () => useMutation(API.deleteUser)
export const useUserMakeAdmin = () => useMutation(API.updateUserRole)
