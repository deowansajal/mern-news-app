const { body } = require('express-validator')

const roleValidator = () => {
    return body('role')
        .isString()
        .withMessage('Role should be string')
        .optional()
        .isIn(['admin'])
        .withMessage('Invalid Role')
        .trim()
}

exports.updateUserRole = [roleValidator()]
