const User = require('../models/User')
const asyncHandler = require('../middleware/asyncHandler')

const sendSuccessResponse = require('../utils/sendSuccessResponse')
const ErrorResponse = require('../utils/errorResponse')

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
exports.getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find()

    sendSuccessResponse({
        res,
        data: { users },
    })
})
