import * as yup from 'yup'

export const signupSchema = yup
    .object()
    .shape({
        name: yup.string().min(2).max(100).required('Name is required.'),
        email: yup.string().email().required('Email is required.'),
        password: yup.string().min(6).max(30).required('Password is required.'),
    })
    .required()

export const loginSchema = yup
    .object()
    .shape({
        email: yup.string().email().required('Email is required.'),
        password: yup.string().min(6).max(30).required('Password is required.'),
    })
    .required()
