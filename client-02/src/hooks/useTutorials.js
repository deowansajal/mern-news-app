import { useQuery } from 'react-query'
import { API } from '../api'

export const useTutorials = () =>
    useQuery('tutorials', () => API.getAllTutorials())
