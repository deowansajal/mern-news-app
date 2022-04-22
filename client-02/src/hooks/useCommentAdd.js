import { useMutation } from 'react-query'
import { API } from '../api'

export const useCommentAdd = () => useMutation(API.addComment)
