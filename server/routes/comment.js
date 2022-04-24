const router = require('express').Router({ mergeParams: true })

// const replyRoutes = require('./reply')
const { commentControllers } = require('../controllers')
const { commentValidators } = require('../validators')

const { protect } = require('../middleware/auth')

router
    .route('/')
    .get(commentControllers.getAllComments)
    .all(protect)
    .post(commentControllers.createComment)

router.patch(
    '/:commentId',
    commentValidators.createReply,
    commentControllers.createReply
)
// router.use('/:commentId/replies', replyRoutes)

module.exports = router
