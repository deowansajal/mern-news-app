import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'

const sendHttpRequest = async ({ method = 'get', url, body, headers = {} }) => {
    const result = { errors: null, data: null }

    const options = {
        method,
        url,
        headers,
    }

    if (method === 'post' || method === 'put' || method === 'patch') {
        options.data = body
    }

    try {
        const { data } = await axios(options)
        result.data = data
    } catch (errors) {
        if (errors.response) {
            result.errors = errors.response.data
        } else {
            result.errors = {
                message: errors.message,
            }
        }
    }

    return result
}

const login = async loginData => {
    return await sendHttpRequest({
        method: 'post',
        url: '/api/v1/auth/login',
        body: loginData,
    })
}
const signup = async signupData => {
    return await sendHttpRequest({
        method: 'post',
        url: 'api/v1/auth/signup',
        body: signupData,
    })
}

const forgotPassword = async forgotPasswordData => {
    return await sendHttpRequest({
        method: 'post',
        url: 'api/v1/auth/forgotPassword',
        body: forgotPasswordData,
    })
}

const resetPassword = async (resetPasswordData, resetToken) => {
    return await sendHttpRequest({
        method: 'put',
        url: `api/v1/auth/resetPassword/${resetToken}`,
        body: resetPasswordData,
    })
}
const getUsers = async () => {
    return await sendHttpRequest({
        url: 'api/v1/users',
    })
}
const deleteUser = async userId => {
    return await sendHttpRequest({
        method: 'delete',
        url: `api/v1/users/${userId}`,
    })
}
const updateUserRole = async userId => {
    return await sendHttpRequest({
        method: 'patch',
        url: `api/v1/users/${userId}`,
        body: { role: 'admin' },
    })
}

const getAllTutorials = async tutorialId => {
    return await sendHttpRequest({
        url: 'api/v1/tutorials',
    })
}

const getTutorial = async tutorialId => {
    return await sendHttpRequest({
        url: `api/v1/tutorials/${tutorialId}/`,
    })
}

const addTutorial = async formData => {
    return await sendHttpRequest({
        method: 'post',
        url: 'api/v1/tutorials',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

const updateTutorial = async (formData, tutorialId) => {
    return await sendHttpRequest({
        method: 'put',
        url: `api/v1/tutorials/${formData.tutorialId}`,
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

const deleteTutorial = async tutorialId => {
    return await sendHttpRequest({
        method: 'delete',
        url: `api/v1/tutorials/${tutorialId}`,
    })
}

const getAllComments = async tutorialId => {
    return await sendHttpRequest({
        url: `api/v1/tutorials/${tutorialId}/comments`,
    })
}

const addComment = async ({ data, tutorialId }) => {
    return await sendHttpRequest({
        method: 'post',
        url: `api/v1/tutorials/${tutorialId}/comments`,
        body: data,
    })
}

export const API = {
    login,
    signup,
    forgotPassword,
    resetPassword,
    getUsers,
    deleteUser,
    updateUserRole,
    getAllTutorials,
    addTutorial,
    deleteTutorial,
    updateTutorial,
    getTutorial,
    getAllComments,
    addComment,
}
