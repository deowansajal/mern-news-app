import { useQuery } from 'react-query'
import { API } from '../api'

export const useGetMe = () => {
    return useQuery(['user'], API.getMe)
}
