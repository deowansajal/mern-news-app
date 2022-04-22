import { useMutation } from 'react-query'
import { API } from '../api'

export const useTutorialDelete = () => useMutation(API.deleteTutorial)
