import { useMutation, useQuery } from 'react-query'
import { API } from '../api'

export const useUsers = page => {
    return useQuery(['users', page], () => API.getUsers(page), {
        keepPreviousData: true,
    })
}

export const useUserDelete = () => useMutation(API.deleteUser)

export const useUserMakeAdmin = () => useMutation(API.updateUserRole)
