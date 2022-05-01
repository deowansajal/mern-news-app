const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createToken = require('../utils/createToken')
const createRandomString = require('../utils/createRandomString')

const {
    USER_ROLES,
    USER_DEFAULT_ROLE,
    PASSWORD_RESET_TOKEN_EXPIRE,
} = require('../utils/constants')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
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
            select: false,
            trim: true,
        },

        avatar: {
            trim: true,
            type: String,
        },

        resetPasswordToken: String,
        resetPasswordExpire: Date,
    },
    { timestamps: true }
)

// Mongoose plugin
UserSchema.plugin(mongoosePaginate)

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

    // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = createToken({ token: resetToken })

    // Set expire
    this.resetPasswordExpire = Date.now() + PASSWORD_RESET_TOKEN_EXPIRE

    return resetToken
}

module.exports = mongoose.model('User', UserSchema)
