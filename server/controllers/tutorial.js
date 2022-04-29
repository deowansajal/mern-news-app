const Tutorial = require('../models/Tutorial')
const asyncHandler = require('../middleware/asyncHandler')
const {
    DEFAULT_PAGE_NUMBER,
    DEFAULT_PAGE_LIMIT,
} = require('../utils/constants')
const ErrorResponse = require('../utils/errorResponse')
const getValidationResult = require('../utils/getValidationResult')
const sendSuccessResponse = require('../utils/sendSuccessResponse')

const mongoose = require('mongoose')

// @desc      Get all tutorials
// @route     GET /api/v1/tutorials
// @access    Public
exports.getAllTutorials = asyncHandler(async (req, res, next) => {
    const { page = DEFAULT_PAGE_NUMBER, limit = DEFAULT_PAGE_LIMIT } = req.query

    const tutorials = await Tutorial.paginate(
        {},
        {
            page,
            limit,
            populate: {
                path: 'author',
                select: 'name ',
            },
        }
    )

    sendSuccessResponse({
        res,
        data: tutorials,
    })
})

// @desc      Get single tutorial
// @route     GET /api/v1/tutorials/:tutorialId
// @access    Public
exports.getTutorial = asyncHandler(async (req, res, next) => {
    const { tutorialId } = req.params
    const tutorial = await Tutorial.findById(tutorialId)

    sendSuccessResponse({
        res,
        data: { tutorial },
    })
})

// @desc      Create tutorial
// @route     POST /api/v1/tutorials
// @access    Private/Admin
exports.createTutorial = asyncHandler(async (req, res, next) => {
    if (!req.file) {
        throw new ErrorResponse({
            message: 'Image is required',
        })
    }

    req.body = { ...req.body, image: req.file.filename }

    const { hasError, errors } = getValidationResult({ req, imperative: true })

    if (hasError) {
        throw new ErrorResponse({
            message: 'Validation errors',
            error: errors,
        })
    }

    const { title, content, image } = req.body

    const tutorial = await Tutorial.create({
        title,
        content,
        image,
        author: req.user?._id,
    })
    sendSuccessResponse({
        res,
        statusCode: 201,
        data: { tutorial },
    })
})

// @desc      Update tutorial
// @route     PUT /api/v1/tutorials
// @access    Private/Admin
exports.updateTutorial = asyncHandler(async (req, res, next) => {
    const { hasError, errors } = getValidationResult({ req })

    if (hasError) {
        throw new ErrorResponse({
            message: 'Validation errors',
            error: errors,
        })
    }
    const { tutorialId } = req.params
    if (!tutorialId) {
        throw new ErrorResponse({ message: 'Invalid tutorialId' })
    }
    const { title, content } = req.body

    const tutorial = await Tutorial.findById(tutorialId)

    tutorial.title = title
    tutorial.content = content
    if (req.file) {
        tutorial.image = req.file.filename
    }

    const updatedTutorial = await tutorial.save({ validateBeforeSave: false })

    sendSuccessResponse({
        res,
        statusCode: 201,
        data: { tutorial: updatedTutorial },
    })
})

// @desc      Delete tutorial
// @route     DELETE /api/v1/tutorials/:tutorialId
// @access    Private/Admin
exports.deleteTutorial = asyncHandler(async (req, res, next) => {
    const { tutorialId } = req.params

    if (!tutorialId) {
        throw new ErrorResponse({ message: 'Invalid tutorialId' })
    }

    await Tutorial.findOneAndDelete({
        _id: tutorialId,
    })

    sendSuccessResponse({
        res,
        statusCode: 201,
        data: { tutorial: null },
    })
})
