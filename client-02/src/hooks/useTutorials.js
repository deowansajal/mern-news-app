import { useQuery } from 'react-query'
import { API } from '../api'

export const useTutorials = (page, limit) => {
    return useQuery(
        ['tutorials', page, limit],
        () => API.getAllTutorials(page, limit),
        {
            keepPreviousData: true,
        }
    )
}
