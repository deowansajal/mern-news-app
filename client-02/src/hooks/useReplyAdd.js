import { useMutation } from 'react-query'
import { API } from '../api'

export const useReplyAdd = () => useMutation(API.addReply)
