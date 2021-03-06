const User = require('../models/User')
const asyncHandler = require('../middleware/asyncHandler')
const createToken = require('../utils/createToken')
const sendSuccessResponse = require('../utils/sendSuccessResponse')
const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail')
const passwordResetTemplate = require('../utils/passwordResetTemplate')
const getValidationResult = require('../utils/getValidationResult')

// @desc      Register user
// @route     POST /api/v1/auth/signup
// @access    Public
exports.signup = asyncHandler(async (req, res, next) => {
    const { hasError, errors } = getValidationResult({ req })

    if (hasError) {
        throw new ErrorResponse({
            message: 'Validation errors',
            error: errors,
        })
    }

    const { name, email, password } = req.body

    const isUserExist = await User.findUserByEmail(email)

    if (isUserExist) {
        throw new ErrorResponse({
            message: 'Email has already been registered',
        })
    }

    // Create user
    const newUser = await User.create({
        name,
        email,
        password,
    })

    sendSuccessResponse({
        res,
        statusCode: 201,
        data: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
        },
        message: `Registration successful!`,
    })
})

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
    const { hasError, errors } = getValidationResult({ req })

    if (hasError) {
        throw new ErrorResponse({
            message: 'Validation errors',
            error: errors,
        })
    }
    const { email, password } = req.body

    const foundUser = await User.findOne({ email }).select('+password')

    if (!foundUser) {
        throw new ErrorResponse({
            message: 'Invalid Email or Password',
        })
    }

    const isPasswordMatch = await foundUser.matchPassword(password)

    if (!isPasswordMatch) {
        throw new ErrorResponse({
            message: 'Invalid Email or Password',
        })
    }

    const token = foundUser.getSignedJwtToken()

    sendSuccessResponse({
        res,
        message: 'Login successful',
        data: { token: `Bearer ${token}` },
    })
})

// @desc      Forgot password
// @route     POST /api/v1/auth/forgotPassword
// @access    Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email }).select(
        '+password'
    )

    if (!user) {
        throw new ErrorResponse({
            message: 'There is no user with that email',
            statusCode: 404,
        })
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken()

    await user.save({ validateBeforeSave: false })

    try {
        const sendResult = await sendEmail({
            email: user.email,
            subject: 'Password Reset',
            html: passwordResetTemplate(resetToken),
        })

        sendSuccessResponse({
            statusCode: 202,
            res,
            message: `You have got an password reset email to ${user.email} please check your inbox`,
        })
    } catch (err) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({ validateBeforeSave: false })

        throw new ErrorResponse({
            message: 'Email could not be sent',
            statusCode: 500,
        })
    }
})

// @desc      Reset password
// @route     PUT /api/v1/auth/resetPassword/:resetToken
// @access    Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
    // Get hashed token

    const resetPasswordToken = createToken({ token: req.params.resetToken })

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    })

    if (!user) {
        throw new ErrorResponse({ message: 'Invalid token' })
    }

    // Set new password
    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save({ validateBeforeSave: false })

    const token = user.getSignedJwtToken()

    sendSuccessResponse({
        res,
        message: 'Login successful',
        data: { token: `Bearer ${token}` },
    })
})
