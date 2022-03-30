const User = require('../models/User')
const asyncHandler = require('../middleware/asyncHandler')

const sendSuccessResponse = require('../utils/sendSuccessResponse')
const ErrorResponse = require('../utils/errorResponse')
const { USER_ROLE_ADMIN } = require('../utils/constants')

// @desc      Get all users as an admin
// @route     GET /api/v1/admin/users
// @access    Private/Admin
exports.getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find()

    sendSuccessResponse({
        res,
        data: { users },
    })
})

// @desc      Get single user as an admin
// @route     GET /api/v1/admin/users/:userId
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.userId)

    sendSuccessResponse({
        res,
        data: { user },
    })
})

// @desc      Update user as an admin
// @route     PUT /api/v1/admin/users/:userId
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.userId)

    const userKeys = Object.keys(req.body)

    userKeys.forEach(userKey => {
        user[userKey] = req.body[userKey]
    })

    const updatedUser = await user.save()

    sendSuccessResponse({
        res,
        data: { user: updatedUser },
    })
})
// @desc      Delete user as an admin
// @route     DELETE /api/v1/admin/users/:userId
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
    const deletedUser = await User.findByIdAndDelete(req.user._id)

    sendSuccessResponse({
        res,
        data: { user: deletedUser },
    })
})
