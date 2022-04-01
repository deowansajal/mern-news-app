const asyncHandler = require('../middleware/asyncHandler')
const Tutorial = require('../models/Tutorial')
const ErrorResponse = require('../utils/errorResponse')
const getValidationResult = require('../utils/getValidationResult')
const sendSuccessResponse = require('../utils/sendSuccessResponse')

// @desc      Get all tutorials
// @route     GET /api/v1/tutorials
// @access    Public
exports.getAllTutorials = asyncHandler(async (req, res, next) => {
    const tutorials = await Tutorial.find()

    sendSuccessResponse({
        res,
        data: { tutorials },
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
    const { hasError, errors } = getValidationResult({ req })

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
        author: req.user._id,
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
    const { title, content, image } = req.body

    const tutorial = await Tutorial.findOne({
        author: req.user._id,
        _id: tutorialId,
    })

    tutorial.title = title
    tutorial.content = content
    tutorial.image = image

    const updatedTutorial = await tutorial.save()

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

    const tutorial = await Tutorial.findOneAndDelete({
        author: req.user._id,
        _id: tutorialId,
    })

    sendSuccessResponse({
        res,
        statusCode: 201,
        data: { tutorial: null },
    })
})
