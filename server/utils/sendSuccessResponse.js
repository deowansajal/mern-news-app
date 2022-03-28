const sendSuccessResponse = ({ res, message, data = {}, statusCode = 200 }) => {
    res.status(statusCode).json({
        message,
        success: true,
        statusCode,
        data,
    })
}

module.exports = sendSuccessResponse
