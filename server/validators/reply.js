const { body } = require('express-validator')

const contentValidator = () => {
    return body('content')
        .notEmpty()
        .withMessage('Comment is Required')
        .isString()
        .withMessage('Comment should be string')
        .isLength({ min: 1, max: 1000 })
        .withMessage('Comment must be between 1 and 1000 chars')
        .trim()
}

exports.createReply = [contentValidator()]
