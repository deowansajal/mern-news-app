const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createToken = require('../utils/createToken')
const createRandomString = require('../utils/createRandomString')
const { USER_ROLES, USER_DEFAULT_ROLE } = require('../utils/constants')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    role: {
        type: String,
        required: true,
        enum: USER_ROLES,
        default: USER_DEFAULT_ROLE,
    },

    password: {
        type: String,
        required: true,
        min: 6,
        max: 30,
        select: false,
    },

    avatar: {
        type: String,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
    // confirmEmailToken: String,

    // isEmailConfirmed: {
    //     type: Boolean,
    //     default: false,
    // },
    // twoFactorCode: String,
    // twoFactorCodeExpire: Date,
    // twoFactorEnable: {
    //     type: Boolean,
    //     default: false,
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

// // Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Match user entered email to hashed email in database
UserSchema.statics.findUserByEmail = async function (enteredEmail) {
    return await this.model('User').findOne({ email: enteredEmail })
}

// // Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
    // Generate token
    const resetToken = createRandomString(20)
    console.log(resetToken)

    // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = createToken({ token: resetToken })

    // Set expire
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000

    return resetToken
}

// Generate email confirm token
UserSchema.methods.generateEmailConfirmToken = function (next) {
    // email confirmation token
    const confirmationToken = createRandomString(20)

    this.confirmEmailToken = createToken({ token: confirmationToken })
    const confirmTokenExtend = createRandomString(100)
    const confirmTokenCombined = `${confirmationToken}.${confirmTokenExtend}`
    return confirmTokenCombined
}

module.exports = mongoose.model('User', UserSchema)
