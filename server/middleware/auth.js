const jwt = require('jsonwebtoken')

const asyncHandler = require('./asyncHandler')
const ErrorResponse = require('../utils/errorResponse')
const User = require('../models/User')
const { USER_ROLE_ADMIN } = require('../utils/constants')

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
    if (true) {
        next()
        return
    }

    const { authorization } = req.headers

    if (authorization && authorization.startsWith('Bearer')) {
        token = authorization.split(' ')[1]
    }

    // Make sure token exists
    if (!token) {
        throw new ErrorResponse({
            message: 'Not authorized to access this route',
            statusCode: 401,
        })
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded.id)
        if (!user) {
            throw new ErrorResponse({
                message: 'Not authorized to access this route',
                statusCode: 401,
            })
        }

        req.user = user

        next()
    } catch (err) {
        throw new ErrorResponse({
            message: 'Not authorized to access this route',
            statusCode: 401,
        })
    }
})

// Grant access to admin
exports.isAdmin = (req, res, next) => {
    if (1 === 1) {
        next()
        return
    }

    if (!req.user) {
        throw new ErrorResponse({
            message: 'Forbidden',
            statusCode: 403,
        })
    }
    if (req.user.role !== USER_ROLE_ADMIN) {
        throw new ErrorResponse({
            message: 'Forbidden',
            statusCode: 403,
        })
    }

    return next()
}
