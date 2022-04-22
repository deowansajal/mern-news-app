import { useMutation } from 'react-query'
import { API } from '../api'

export const useTutorialUpdate = () => useMutation(API.updateTutorial)
