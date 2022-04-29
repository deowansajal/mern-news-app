import { sendHttpRequest } from '../utils/sendHttpRequest'

const signup = async signupData => {
    return await sendHttpRequest({
        method: 'post',
        url: 'api/v1/auth/signup',
        body: signupData,
    })
}
const login = async loginData => {
    return await sendHttpRequest({
        method: 'post',
        url: '/api/v1/auth/login',
        body: loginData,
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
const getUsers = async page => {
    return await sendHttpRequest({
        url: `api/v1/users?page=${page}`,
    })
}

const getMe = async () => {
    return await sendHttpRequest({
        url: `api/v1/users/me`,
    })
}
const deleteUser = async userId => {
    console.log({ userId })
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

const getAllTutorials = async (page = 1, limit = 10) => {
    return await sendHttpRequest({
        url: `api/v1/tutorials?page=${page}&limit=${limit}`,
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
    console.log({ tutorialId: tutorialId })
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
const addReply = async ({ data, tutorialId, commentId }) => {
    return await sendHttpRequest({
        method: 'patch',
        url: `api/v1/tutorials/${tutorialId}/comments/${commentId}`,
        body: data,
    })
}

export const API = {
    login,
    signup,
    forgotPassword,
    resetPassword,
    getUsers,
    getMe,
    deleteUser,
    updateUserRole,
    getAllTutorials,
    addTutorial,
    deleteTutorial,
    updateTutorial,
    getTutorial,
    getAllComments,
    addComment,
    addReply,
}
