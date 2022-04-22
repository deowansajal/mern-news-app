import * as yup from 'yup'

export const signupSchema = yup
    .object()
    .shape({
        name: yup.string().min(2).max(100).required(),
        email: yup.string().email().required(),
        password: yup.string().min(6).max(30).required(),
    })
    .required()

export const loginSchema = yup
    .object()
    .shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).max(30).required(),
    })
    .required()

export const forgotPasswordSchema = yup
    .object()
    .shape({
        email: yup.string().email().required(),
    })
    .required()

export const resetPasswordSchema = yup
    .object()
    .shape({
        password: yup.string().min(6).max(30).required(),
        repeatPassword: yup
            .string()
            .oneOf(
                [yup.ref('password'), null],
                'Password confirmation does not match password'
            ),
    })
    .required()

export const tutorialSchema = yup
    .object()
    .shape({
        title: yup.string().min(3).max(200).required(),
        content: yup.string().min(5).max(5000).required(),
    })
    .required()
export const commentSchema = yup
    .object()
    .shape({
        content: yup.string().min(1).max(1000).required(),
    })
    .required()
