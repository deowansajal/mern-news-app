const fs = require('fs')
const mongoose = require('mongoose')

exports.errorHandler = (err, req, res, next) => {
    const { message, errors, statusCode, success } = err

    console.log(errors)

    if (req.file) {
        fs.promises.unlink(req.file.path)
    }

    if (statusCode && statusCode < 500) {
        return res.status(statusCode).json({
            success,
            statusCode,
            message,
            errors,
        })
    }

    const errorsKeys = Object.keys(errors || {})

    const mongooseErrors = {}

    errorsKeys.forEach(errorKey => {
        if (errors[errorKey] instanceof mongoose.Error) {
            mongooseErrors[errorKey] = {
                message: err.errors[errorKey].properties.message,
                value: err.errors[errorKey].properties.value,
                path: err.errors[errorKey].properties.path,
            }
        }
    })

    if (Object.keys(mongooseErrors).length > 0) {
        return res.status(400).json({
            success: false,
            statusCode: 400,
            message,
            errors: mongooseErrors,
        })
    }

    console.log({ statusCode: 500, message })

    res.status(500).json({ message: 'An error occurred' })
}
