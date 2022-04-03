const asyncHandler = require('../middleware/asyncHandler')
const Comment = require('../models/Comment')
const Reply = require('../models/Reply')
const {
    DEFAULT_PAGE_NUMBER,
    DEFAULT_PAGE_LIMIT,
} = require('../utils/constants')
const ErrorResponse = require('../utils/errorResponse')
const getValidationResult = require('../utils/getValidationResult')
const sendSuccessResponse = require('../utils/sendSuccessResponse')

// @desc      Get all replies
// @route     GET /api/v1/tutorials/:tutorialId/comments/:commentId/replies
// @access    Public
exports.getAllReplies = asyncHandler(async (req, res, next) => {
    const { page = DEFAULT_PAGE_NUMBER, limit = DEFAULT_PAGE_LIMIT } = req.query

    const replies = await Reply.paginate({}, { page, limit })

    sendSuccessResponse({
        res,
        data: { replies },
    })
})

// @desc      Create reply
// @route     POST /api/v1/tutorials/:tutorialId/comments/:commentId/replies
// @access    Private/(Admin, User)
exports.createReply = asyncHandler(async (req, res, next) => {
    const { hasError, errors } = getValidationResult({ req })

    if (hasError) {
        throw new ErrorResponse({
            message: 'Validation errors',
            error: errors,
        })
    }

    const { content } = req.body

    const { tutorialId, commentId } = req.params

    const comment = await Comment.findById(commentId)

    if (!comment) {
        throw new ErrorResponse({
            statusCode: 404,
            message: 'There is no comment with the associated comment id',
        })
    }

    const reply = await Reply.create({
        content,
        tutorial: tutorialId,
        comment: commentId,
        author: req.user._id,
    })
    sendSuccessResponse({
        res,
        statusCode: 201,
        data: { reply },
    })
})
