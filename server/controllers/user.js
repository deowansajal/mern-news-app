const User = require('../models/User')
const asyncHandler = require('../middleware/asyncHandler')
const sendSuccessResponse = require('../utils/sendSuccessResponse')
const ErrorResponse = require('../utils/errorResponse')
const { USER_ROLE_ADMIN } = require('../utils/constants')

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private/Admin
exports.getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find()

    sendSuccessResponse({
        res,
        data: { users },
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

// @desc      Update user role
// @route     PUT /api/v1/users/:userId
// @access    Private/Admin
exports.updateUserRole = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.userId)

    user.role = req.body.role

    const updatedUser = await user.save()

    sendSuccessResponse({
        res,
        data: { user: updatedUser },
    })
})

// @desc      Delete user
// @route     DELETE /api/v1/users/:userId
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
    const deletedUser = await User.findByIdAndDelete(req.user._id)

    sendSuccessResponse({
        res,
        data: { user: deletedUser },
    })
})
