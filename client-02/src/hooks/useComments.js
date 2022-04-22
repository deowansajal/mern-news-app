import { useQuery } from 'react-query'
import { API } from '../api'

export const useComments = tutorialId =>
    useQuery(['comments', tutorialId], () => API.getAllComments(tutorialId))
