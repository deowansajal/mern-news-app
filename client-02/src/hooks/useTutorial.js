import { useQuery } from 'react-query'
import { API } from '../api'

export const useTutorial = tutorialId =>
    useQuery(['tutorials', tutorialId], () => API.getTutorial(tutorialId), {
        enabled: !!tutorialId,
    })
