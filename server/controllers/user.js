const User = require('../models/User')
const asyncHandler = require('../middleware/asyncHandler')
const sendSuccessResponse = require('../utils/sendSuccessResponse')
const getValidationResult = require('../utils/getValidationResult')
const ErrorResponse = require('../utils/errorResponse')
const {
    DEFAULT_PAGE_NUMBER,
    DEFAULT_PAGE_LIMIT,
} = require('../utils/constants')

// @desc      Get all users
// @route     GET /api/v1/users?page=number(default 1)&limit=number(default 10)
// @access    Private/Admin
exports.getAllUsers = asyncHandler(async (req, res, next) => {
    console.log({ page: +req.query.page })
    const { page = DEFAULT_PAGE_NUMBER, limit = DEFAULT_PAGE_LIMIT } = req.query

    const users = await User.paginate(
        {},
        { page, limit, select: 'name email role' }
    )

    sendSuccessResponse({
        res,
        data: users,
    })
})

// @desc      Get single user
// @route     GET /api/v1/users/:userId
// @access    Private/(Admin, User )
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.userId)

    sendSuccessResponse({
        res,
        data: { user },
    })
})

// @desc      Get current logged in user
// @route     GET /api/v1/users/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
    sendSuccessResponse({
        res,
        data: { user: req.user },
    })
})

// @desc      Update user role
// @route     PATCH /api/v1/users/:userId
// @access    Private/Admin
exports.updateUserRole = asyncHandler(async (req, res, next) => {
    const { hasError, errors } = getValidationResult({ req })

    if (hasError) {
        throw new ErrorResponse({
            message: 'Validation errors',
            error: errors,
        })
    }
    const user = await User.findById(req.params.userId)

    user.role = req.body.role

    const updatedUser = await user.save({ validateBeforeSave: false })

    sendSuccessResponse({
        res,
        data: { user: updatedUser },
    })
})

// @desc      Delete user
// @route     DELETE /api/v1/users/:userId
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
    console.log({ p: req.params })
    const deletedUser = await User.findByIdAndDelete(req.params.userId)

    sendSuccessResponse({
        res,
        data: { user: deletedUser },
    })
})
