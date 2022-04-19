import React from 'react'
import { toast } from 'react-toastify'

const ToastMessage = ({ message, setMessage, type, toastId }) => {
    if (!message) {
        return null
    }
    return (
        <div>
            {toast[type](message, {
                onClose: () => setMessage(''),
                toastId,
            })}
        </div>
    )
}

export default ToastMessage
