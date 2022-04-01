const { body } = require('express-validator')

const { USER_DEFAULT_ROLE } = require('../utils/constants')

const nameValidator = () => {
    return body('name')
        .notEmpty()
        .withMessage('Name is Required')
        .isString()
        .withMessage('Name should be string')
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 chars')
        .trim()
}

const emailValidator = () => {
    return body('email')
        .notEmpty()
        .withMessage('Email is Required')
        .isString()
        .withMessage('Email should be string')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .normalizeEmail()
}

const passwordValidator = () => {
    return body('password')
        .notEmpty()
        .withMessage('Email is Required')
        .isString()
        .withMessage('Password should be string')
        .isLength({ min: 6, max: 30 })
        .withMessage('Password must be between 6 and 30 chars')
        .trim()
}

const roleValidator = () => {
    return body('role')
        .isString()
        .withMessage('Role should be string')
        .optional()
        .isIn([USER_DEFAULT_ROLE])
        .withMessage('Invalid Role')
        .trim()
}

exports.signup = [
    nameValidator(),
    emailValidator(),
    passwordValidator(),
    roleValidator(),
]

exports.login = [emailValidator(), passwordValidator()]

exports.resetPassword = [passwordValidator()]
