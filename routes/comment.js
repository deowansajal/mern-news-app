const router = require('express').Router({ mergeParams: true })

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
    protect,
    commentValidators.createReply,
    commentControllers.createReply
)

module.exports = router
