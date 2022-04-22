const { body } = require('express-validator')

const { USER_ROLES } = require('../utils/constants')

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
