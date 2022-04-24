const Comment = require('../models/Comment')
const asyncHandler = require('../middleware/asyncHandler')
const {
    DEFAULT_PAGE_NUMBER,
    DEFAULT_PAGE_LIMIT,
} = require('../utils/constants')
const ErrorResponse = require('../utils/errorResponse')
const getValidationResult = require('../utils/getValidationResult')
const sendSuccessResponse = require('../utils/sendSuccessResponse')
const { default: mongoose } = require('mongoose')

// @desc      Get all comments
// @route     GET /api/v1/tutorials/:tutorialId/comments
// @access    Public
exports.getAllComments = asyncHandler(async (req, res, next) => {
    const { tutorialId } = req.params
    const { page = DEFAULT_PAGE_NUMBER, limit = DEFAULT_PAGE_LIMIT } = req.query

    const comments = await Comment.paginate(
        { tutorial: tutorialId },
        { page, limit, populate: { path: 'replies.author author' } }
    )

    sendSuccessResponse({
        res,
        data: { comments },
    })
})

// @desc      Create comment
// @route     POST /api/v1/tutorials/:tutorialId/comments
// @access    Private/(Admin, User)
exports.createComment = asyncHandler(async (req, res, next) => {
    const { hasError, errors } = getValidationResult({ req })

    if (hasError) {
        throw new ErrorResponse({
            message: 'Validation errors',
            error: errors,
        })
    }

    const { tutorialId } = req.params

    const { content } = req.body

    const comment = await Comment.create({
        content,
        tutorial: tutorialId,
        author: '62606e848434160b61d24947',
    })
    sendSuccessResponse({
        res,
        statusCode: 201,
        data: { comment },
    })
})

// @desc      Create reply
// @route     PATCH /api/v1/tutorials/:tutorialId/comments/:commentId
// @access    Private/(Admin, User)
exports.createReply = asyncHandler(async (req, res, next) => {
    const { hasError, errors } = getValidationResult({ req })
    console.log({ errors, body: req.body })
    if (hasError) {
        throw new ErrorResponse({
            message: 'Validation errors',
            error: errors,
        })
    }

    const { content } = req.body

    const { commentId } = req.params

    const comment = await Comment.findById(commentId)

    if (!comment) {
        throw new ErrorResponse({
            statusCode: 404,
            message: 'There is no comment with the associated comment id',
        })
    }

    comment.replies.push({
        content,
        author: '62606e848434160b61d24947',
    })

    const savedComment = await comment.save({ validateBeforeSave: false })

    sendSuccessResponse({
        res,
        statusCode: 201,
        data: { comment: savedComment },
    })
})
