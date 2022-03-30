const User = require('../models/User')
const asyncHandler = require('../middleware/asyncHandler')
// const getValidationResult = require('../utils/getValidationResult')
// const sendEmail = require('../utils/sendEmail')
const createToken = require('../utils/createToken')
// const emailConfirmationTemplate = require('../utils/emailConfirmationTemplate')
// const passwordResetTemplate = require('../utils/passwordResetTemplate')
const sendSuccessResponse = require('../utils/sendSuccessResponse')
const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail')
const passwordResetTemplate = require('../utils/passwordResetTemplate')

// @desc      Register user
// @route     POST /api/v1/auth/signup
// @access    Public
exports.signup = asyncHandler(async (req, res, next) => {
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
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            },
        },
        message: `Registration successful!`,
    })
})

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
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

// @desc      Get current logged in user
// @route     GET /api/v1/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
    sendSuccessResponse({
        res,
        data: { user: req.user },
    })
})

// @desc    Update user profile
// @route   PUT /api/v1/auth/me
// @access  Private
// exports.updateUserProfile = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id).select('password')

//     if (!user) {
//         throw new ErrorResponse({
//             statusCode: 403,
//             message: 'Forbidden!',
//         })
//     }

//     const { name, password, confirmPassword } = req.body

//     user.name = name

//     if (password) {
//         const isMatch = await user.matchPassword(confirmPassword)

//         if (!isMatch) {
//             throw new ErrorResponse({
//                 code: 401,
//                 message: 'Unauthorized!',
//             })
//         }

//         user.password = password
//     }

//     const updatedUser = await user.save()

//     return sendSuccessResponse({
//         res,
//         message: 'User Update successful',
//         data: { name: updatedUser.name },
//     })
// })

// @desc      Forgot password
// @route     POST /api/v1/auth/forgot-password
// @access    Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email }).select(
        '+password'
    )

    if (!user) {
        throw new ErrorResponse({
            message: 'There is no user with that email',
            code: 404,
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
            res,
            message: `You have got an password reset email to ${user.email} please check your inbox`,
        })
    } catch (err) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({ validateBeforeSave: false })
        console.log(err)

        throw new ErrorResponse({
            message: 'Email could not be sent',
            statusCode: 500,
        })
    }
})

// @desc      Reset password
// @route     PUT /api/auth/resetpassword/:resettoken
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
    await user.save()

    const token = user.getSignedJwtToken()

    sendSuccessResponse({
        res,
        message: 'Login successful',
        data: { token: `Bearer ${token}` },
    })
})
