const { body } = require('express-validator')

const titleValidator = () => {
    return body('title')
        .notEmpty()
        .withMessage('Title is Required')
        .isString()
        .withMessage('Title should be string')
        .isLength({ min: 3, max: 200 })
        .withMessage('Title must be between 3 and 100 chars')
        .trim()
}

const contentValidator = () => {
    return body('content')
        .notEmpty()
        .withMessage('Content is Required')
        .isString()
        .withMessage('Content should be string')
        .isLength({ min: 5, max: 5000 })
        .withMessage('Content must be between 5 and 5000 chars')
}

const imageValidator = () => {
    return body('image')
        .notEmpty()
        .withMessage('Image is Required')
        .isURL()
        .withMessage('Please provide a valid image')
}

exports.createTutorial = [
    titleValidator(),
    contentValidator(),
    imageValidator(),
]
exports.updateTutorial = [
    titleValidator(),
    contentValidator(),
    // imageValidator(),
]
